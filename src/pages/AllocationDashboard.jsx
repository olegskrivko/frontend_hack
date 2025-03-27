import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CheckIcon from '@mui/icons-material/Check'; // Import the check icon

const apiUrls = {
  asset: "https://backend-hack-0ulp.onrender.com/portfolio/assets",
  regional: "https://backend-hack-0ulp.onrender.com/portfolio/regions",
  sector: "https://backend-hack-0ulp.onrender.com/portfolio/sectors",
};

const chartColors = [
  "#FA4F00", "#FDC92A", "#247886", "#BF5998", "#FF33A8",
];

const AllocationDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [insights, setInsights] = useState({});
  const [activeCategory, setActiveCategory] = useState("asset");

  const fetchData = async (category) => {
    setLoading(true);
    setError(null);
    setActiveCategory(category);

    try {
      const response = await fetch(apiUrls[category]);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();

      // Dynamically determine the key (e.g., asset_allocation, regional_distribution)
      const key = Object.keys(result).find(k => k.includes("_allocation") || k.includes("_distribution"));

      if (key && typeof result[key] === "object") {
        const formattedData = Object.entries(result[key]).map(([name, value], index) => ({
          name,
          value: typeof value === "number" ? value : 0, // Ensure numerical values
          color: chartColors[index % chartColors.length] || "#FF33A8", // Fallback to "#FF33A8" if index is out of bounds
         // color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Generate random color
        }));
        setData(formattedData);
      } else {
        setData([]); // Prevent stale data
      }

      // Safely parse AI insights
      const insightText = result.ai_insight ? result.ai_insight.replace("```json\n", "").replace("\n```", "") : "{}";
      try {
        setInsights(JSON.parse(insightText));
      } catch (parseError) {
        console.error("Error parsing AI insight:", parseError);
        setInsights({});
      }
    } catch (err) {
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("asset");
  }, []);

  return (
    <Box sx={{ p: 2, backgroundColor: "#FAF3EB", }}>


      <Card sx={{ p: 1, borderRadius: 3, backgroundColor: "white" }}>
        <Box sx={{ p: 1}}>
      <Typography variant="h5" fontWeight="bold" color="#E76A09" textAlign="left" gutterBottom>
        Allocation
      </Typography>
      </Box>
        <Stack  direction="row" spacing={1} sx={{ mb: 2, p: 1 }}>
          {["asset", "regional", "sector"].map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "contained" : "outlined"}
              sx={{
                bgcolor: activeCategory === category ? "#FFD166" : "#FFF1CB",
                color: "black",
                border: "none",
                borderRadius: "50px",
                outline: "none",
                "&:hover": {
                  bgcolor: activeCategory === category ? "#FFC107" : "#FFE082",
                },
              }}
              onClick={() => fetchData(category)}
            >
              {activeCategory === category && <CheckIcon sx={{ mr: 1 }} />} 
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </Stack>

        <CardContent>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">Error: {error}</Typography>
          ) : data.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8" 
                    innerRadius={50} >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <Box mt={2}>
                {data.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    justifyContent="space-between"
                    p={1}
                    bgcolor="#F7F7F7"
                    borderRadius={2}
                    my={1}
                  >
                    <Box display="flex" alignItems="center">
                      <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
                      <Typography>{item.name}</Typography>
                    </Box>
                    <Typography fontWeight="bold">{item.value.toFixed(2)}%</Typography>
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            <Typography>Select a category to load data</Typography>
          )}
        </CardContent>
      </Card>

      {/* Insights Section */}
      {insights && Object.keys(insights).length > 0 && (
        <Card sx={{ mt: 3, p: 1, borderRadius: 3, backgroundColor: "white" }}>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
              Overview on {activeCategory}
            </Typography>
            <Typography variant="body2" color="gray" mb={2}>
              AI-generated content and might be incorrect.
            </Typography>
            {Object.entries(insights).map(([key, value]) => (
              <Box key={key} mb={2}>
                <Typography variant="h6" fontWeight="bold" color="black">
                  {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}:
                </Typography>

                {/* Handle object-like data for sectors or regions */}
                {typeof value === "object" && !Array.isArray(value) ? (
                  <ul style={{ paddingLeft: "20px" }}>
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <li key={subKey}>
                        <Typography color="black">
                          <strong>{subKey}:</strong> {subValue}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ) : Array.isArray(value) ? (
                  <ul style={{ paddingLeft: "20px" }}>
                    {value.map((item, index) => (
                      <li key={index}>
                        {typeof item === "object" ? (
                          <Typography color="black">{JSON.stringify(item)}</Typography>
                        ) : (
                          <Typography color="black">{String(item)}</Typography>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="body1" color="black">
                    {String(value)}
                  </Typography>
                )}
              </Box>
            ))}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default AllocationDashboard;
