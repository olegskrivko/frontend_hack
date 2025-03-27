// import React from "react";
// import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Cash", value: 10, color: "#167D7F" },
//   { name: "Stocks", value: 49, color: "#F25C05" },
//   { name: "Funds", value: 38, color: "#FEC13D" },
//   { name: "Bonds", value: 3, color: "#C85CC2" }
// ];

// const AllocationDashboard = () => {
//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography>
//       <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//         <Button variant="contained" sx={{ bgcolor: "#FFD166", color: "black" }}>Asset</Button>
//         <Button variant="outlined" sx={{ color: "black" }}>Regional</Button>
//         <Button variant="outlined" sx={{ color: "black" }}>Sector</Button>
//       </Stack>
//       <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>
//         <CardContent>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//           <Box mt={2}>
//             {data.map((item, index) => (
//               <Box key={index} display="flex" justifyContent="space-between" p={1} bgcolor="#F7F7F7" borderRadius={2} my={1}>
//                 <Box display="flex" alignItems="center">
//                   <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
//                   <Typography>{item.name}</Typography>
//                 </Box>
//                 <Typography fontWeight="bold">{item.value}%</Typography>
//               </Box>
//             ))}
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default AllocationDashboard;
// import React, { useState } from "react";
// import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const apiUrls = {
//   asset: "https://backend-hack-0ulp.onrender.com/portfolio/assets",
//   regional: "https://backend-hack-0ulp.onrender.com/portfolio/regions",
//   sector: "https://backend-hack-0ulp.onrender.com/portfolio/sectors",
// };

// const AllocationDashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [insights, setInsights] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("asset");

//   const fetchData = async (category) => {
//     setLoading(true);
//     setError(null);
//     setActiveCategory(category);

//     try {
//       const response = await fetch(apiUrls[category]);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const result = await response.json();

//       // Extract asset allocation from response
//       if (result.asset_allocation) {
//         const formattedData = Object.keys(result.asset_allocation).map((key) => ({
//           name: key,
//           value: result.asset_allocation[key],
//           color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
//         }));

//         setData(formattedData);
//       }

//       // Store AI insights for display
//       setInsights(result.ai_insight ? JSON.parse(result.ai_insight.replace("```json\n", "").replace("\n```", "")) : null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography>

//       {/* Buttons for switching categories */}
//       <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//         <Button
//           variant={activeCategory === "asset" ? "contained" : "outlined"}
//           sx={{ bgcolor: activeCategory === "asset" ? "#FFD166" : "white", color: "black" }}
//           onClick={() => fetchData("asset")}
//         >
//           Asset
//         </Button>
//         <Button
//           variant={activeCategory === "regional" ? "contained" : "outlined"}
//           sx={{ bgcolor: activeCategory === "regional" ? "#FFD166" : "white", color: "black" }}
//           onClick={() => fetchData("regional")}
//         >
//           Regional
//         </Button>
//         <Button
//           variant={activeCategory === "sector" ? "contained" : "outlined"}
//           sx={{ bgcolor: activeCategory === "sector" ? "#FFD166" : "white", color: "black" }}
//           onClick={() => fetchData("sector")}
//         >
//           Sector
//         </Button>
//       </Stack>

//       {/* Chart Card */}
//       <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>
//         <CardContent>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography color="error">Error: {error}</Typography>
//           ) : data.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
//                     {data.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <Box mt={2}>
//                 {data.map((item, index) => (
//                   <Box
//                     key={index}
//                     display="flex"
//                     justifyContent="space-between"
//                     p={1}
//                     bgcolor="#F7F7F7"
//                     borderRadius={2}
//                     my={1}
//                   >
//                     <Box display="flex" alignItems="center">
//                       <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
//                       <Typography>{item.name}</Typography>
//                     </Box>
//                     <Typography fontWeight="bold">{item.value.toFixed(2)}%</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </>
//           ) : (
//             <Typography>Select a category to load data</Typography>
//           )}
//         </CardContent>
//       </Card>

//       {/* Insights Section */}
//       {insights && (
//         <Card sx={{ mt: 3, p: 3, borderRadius: 3, backgroundColor: "white" }}>
//           <CardContent>
//             <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
//               AI Insights
//             </Typography>
//             <Typography variant="body1" mb={2}>
//               {insights.summary}
//             </Typography>
//             <Typography variant="body1" fontWeight="bold" color="#D9534F" mb={2}>
//               Risk Assessment: {insights.risk_assessment}
//             </Typography>
//             <Typography variant="body1" fontWeight="bold" color="#5BC0DE" mb={2}>
//               Balance Evaluation: {insights.balance_evaluation}
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" color="#28A745">
//               Suggestions:
//             </Typography>
//             <ul>
//               {insights.suggestions.map((suggestion, index) => (
//                 <li key={index}>
//                   <Typography>{suggestion}</Typography>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default AllocationDashboard;
// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const apiUrls = {
//   asset: "https://backend-hack-0ulp.onrender.com/portfolio/assets",
//   regional: "https://backend-hack-0ulp.onrender.com/portfolio/regions",
//   sector: "https://backend-hack-0ulp.onrender.com/portfolio/sectors",
// };

// const categoryKeys = {
//   asset: "asset_allocation",
//   regional: "regional_distribution",
//   sector: "sector_distribution",
// };


// const AllocationDashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [insights, setInsights] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("asset");

//   const fetchData = async (category) => {
//     setLoading(true);
//     setError(null);
//     setActiveCategory(category);

//     try {
//       const response = await fetch(apiUrls[category]);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const result = await response.json();

//       // Extract asset allocation from response
//       if (result.asset_allocation) {
//         const formattedData = Object.keys(result.asset_allocation).map((key) => ({
//           name: key,
//           value: result.asset_allocation[key],
//           color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
//         }));

//         setData(formattedData);
//       }

//       // Store AI insights for display
//       setInsights(result.ai_insight ? JSON.parse(result.ai_insight.replace("```json\n", "").replace("\n```", "")) : null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch assets data on initial render
//   useEffect(() => {
//     fetchData("asset");
//   }, []);

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography>

//       <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>

// <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//   {['asset', 'regional', 'sector'].map((category) => (
//     <Button
//       key={category}
//       variant={activeCategory === category ? 'contained' : 'outlined'}
//       sx={{
//         bgcolor: activeCategory === category ? '#FFD166' : '#FFF1CB',
//         color: 'black',
//         border: 'none',
//         borderRadius: '50px', // Makes the button more rounded
//         outline: 'none', // Removes the focus outline
//         '&:focus': {
//           outline: 'none', // Ensures no outline on focus
//         },
//         '&:hover': {
//           bgcolor: activeCategory === category ? '#FFC107' : '#FFE082', // Optional: Change background on hover
//         },
//       }}
//       onClick={() => fetchData(category)}
//     >
//       {category.charAt(0).toUpperCase() + category.slice(1)}
//     </Button>
//   ))}
// </Stack>

//         <CardContent>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography color="error">Error: {error}</Typography>
//           ) : data.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
//                     {data.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <Box mt={2}>
//                 {data.map((item, index) => (
//                   <Box
//                     key={index}
//                     display="flex"
//                     justifyContent="space-between"
//                     p={1}
//                     bgcolor="#F7F7F7"
//                     borderRadius={2}
//                     my={1}
//                   >
//                     <Box display="flex" alignItems="center">
//                       <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
//                       <Typography>{item.name}</Typography>
//                     </Box>
//                     <Typography fontWeight="bold">{item.value.toFixed(2)}%</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </>
//           ) : (
//             <Typography>Select a category to load data</Typography>
//           )}
//         </CardContent>
//       </Card>

//       {/* Insights Section */}
//       {insights && (
//   <Card sx={{ mt: 3, p: 3, borderRadius: 3, backgroundColor: "white" }}>
//     <CardContent sx={{ textAlign: "left" }}>
//       {/* Overview text before AI Insights section */}
//       <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
//         Overview on assets
//       </Typography>
//       <Typography variant="body2" color="gray" mb={2}>
//         AI-generated content and might be incorrect.
//       </Typography>

//       <Typography variant="h6" fontWeight="bold" color="black" gutterBottom>
//         AI Insights
//       </Typography>
//       <Typography variant="body1" color="black" mb={2}>
//         {insights.summary}
//       </Typography>
      
//       <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
//         Risk Assessment:
//       </Typography>
//       <Typography variant="body1" color="black" mb={2}>
//         {insights.risk_assessment}
//       </Typography>

//       <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
//         Balance Evaluation:
//       </Typography>
//       <Typography variant="body1" color="black" mb={2}>
//         {insights.balance_evaluation}
//       </Typography>

//       <Typography variant="h6" fontWeight="bold" color="black">
//         Suggestions:
//       </Typography>
//       <ul style={{ paddingLeft: "20px" }}>
//         {insights.suggestions.map((suggestion, index) => (
//           <li key={index}>
//             <Typography color="black" sx={{ textAlign: "left" }}>{suggestion}</Typography>
//           </li>
//         ))}
//       </ul>
//     </CardContent>
//   </Card>
// )}


//     </Box>
//   );
// };

// export default AllocationDashboard;
// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const apiUrls = {
//   asset: "https://backend-hack-0ulp.onrender.com/portfolio/assets",
//   regional: "https://backend-hack-0ulp.onrender.com/portfolio/regions",
//   sector: "https://backend-hack-0ulp.onrender.com/portfolio/sectors",
// };

// const categoryKeys = {
//   asset: "asset_allocation",
//   regional: "regional_distribution",
//   sector: "sector_distribution",
// };

// const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// const AllocationDashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [insights, setInsights] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("asset");

//   const fetchData = async (category) => {
//     setLoading(true);
//     setError(null);
//     setActiveCategory(category);

//     try {
//       const response = await fetch(apiUrls[category]);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const result = await response.json();

//       // Identify the correct key for data extraction
//       const key = categoryKeys[category];
//       if (result[key]) {
//         const formattedData = Object.keys(result[key]).map((item) => ({
//           name: item,
//           value: result[key][item],
//           color: getRandomColor(),
//         }));
//         setData(formattedData);
//       } else {
//         setData([]);
//       }

//       // Parse AI insights safely
//       setInsights(result.ai_insight ? JSON.parse(result.ai_insight.replace("```json\n", "").replace("\n```", "")) : null);
//     } catch (err) {
//       setError(err.message);
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch initial data for 'asset' category
//   useEffect(() => {
//     fetchData("asset");
//   }, []);

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       {/* <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography> */}

//       <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography>
//         <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//           {Object.keys(apiUrls).map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "contained" : "outlined"}
//               sx={{
//                 bgcolor: activeCategory === category ? "#FFD166" : "#FFF1CB",
//                 color: "black",
//                 border: "none",
//                 borderRadius: "50px",
//                 "&:hover": {
//                   bgcolor: activeCategory === category ? "#FFC107" : "#FFE082",
//                 },
//               }}
//               onClick={() => fetchData(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </Button>
//           ))}
//         </Stack>

//         <CardContent>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography color="error">Error: {error}</Typography>
//           ) : data.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
//                     {data.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <Box mt={2}>
//                 {data.map((item, index) => (
//                   <Box
//                     key={index}
//                     display="flex"
//                     justifyContent="space-between"
//                     p={1}
//                     bgcolor="#F7F7F7"
//                     borderRadius={2}
//                     my={1}
//                   >
//                     <Box display="flex" alignItems="center">
//                       <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
//                       <Typography>{item.name}</Typography>
//                     </Box>
//                     <Typography fontWeight="bold">{item.value.toFixed(2)}%</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </>
//           ) : (
//             <Typography>Select a category to load data</Typography>
//           )}
//         </CardContent>
//       </Card>
// {/* AI Insights Section */}
// {insights && (
//   <Card sx={{ mt: 3, p: 3, borderRadius: 3, backgroundColor: "white" }}>
//     <CardContent sx={{ textAlign: "left" }}>
//       <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
//         Overview on {activeCategory}
//       </Typography>
//       <Typography variant="body2" color="gray" mb={2}>
//         AI-generated content and might be incorrect.
//       </Typography>

//       <Typography variant="h6" fontWeight="bold" color="black" gutterBottom>
//         AI Insights
//       </Typography>
//       <Typography variant="body1" color="black" mb={2}>
//         {typeof insights.summary === "object" 
//           ? JSON.stringify(insights.summary, null, 2) 
//           : insights.summary}
//       </Typography>

//       <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
//         Risk Assessment:
//       </Typography>
//       <Typography variant="body1" color="black" mb={2}>
//         {typeof insights.risk_assessment === "object"
//           ? JSON.stringify(insights.risk_assessment, null, 2)
//           : insights.risk_assessment}
//       </Typography>

//       <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
//         Balance Evaluation:
//       </Typography>
//       <Typography variant="body1" color="black" mb={2}>
//         {typeof insights.balance_evaluation === "object"
//           ? JSON.stringify(insights.balance_evaluation, null, 2)
//           : insights.balance_evaluation}
//       </Typography>

//       <Typography variant="h6" fontWeight="bold" color="black">
//         Suggestions:
//       </Typography>
//       <ul style={{ paddingLeft: "20px" }}>
//         {Array.isArray(insights.suggestions)
//           ? insights.suggestions.map((suggestion, index) => (
//               <li key={index}>
//                 <Typography color="black" sx={{ textAlign: "left" }}>
//                   {suggestion}
//                 </Typography>
//               </li>
//             ))
//           : typeof insights.suggestions === "object"
//           ? JSON.stringify(insights.suggestions, null, 2)
//           : insights.suggestions}
//       </ul>
//     </CardContent>
//   </Card>
// )}
//       {/* Insights Section */}
//       {/* {insights && (
//         <Card sx={{ mt: 3, p: 3, borderRadius: 3, backgroundColor: "white" }}>
//           <CardContent sx={{ textAlign: "left" }}>
//             <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
//               Overview on {activeCategory}
//             </Typography>
//             <Typography variant="body2" color="gray" mb={2}>
//               AI-generated content and might be incorrect.
//             </Typography>

//             <Typography variant="h6" fontWeight="bold" color="black" gutterBottom>
//               AI Insights
//             </Typography>
//             <Typography variant="body1" color="black" mb={2}>
//               {insights.summary}
//             </Typography>

//             <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
//               Risk Assessment:
//             </Typography>
//             <Typography variant="body1" color="black" mb={2}>
//               {insights.risk_assessment}
//             </Typography>

//             <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
//               Balance Evaluation:
//             </Typography>
//             <Typography variant="body1" color="black" mb={2}>
//               {insights.balance_evaluation}
//             </Typography>

//             <Typography variant="h6" fontWeight="bold" color="black">
//               Suggestions:
//             </Typography>
//             <ul style={{ paddingLeft: "20px" }}>
//               {insights.suggestions.map((suggestion, index) => (
//                 <li key={index}>
//                   <Typography color="black" sx={{ textAlign: "left" }}>{suggestion}</Typography>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       )} */}
//     </Box>
//   );
// };

// export default AllocationDashboard;
// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const apiUrls = {
//   asset: "https://backend-hack-0ulp.onrender.com/portfolio/assets",
//   regional: "https://backend-hack-0ulp.onrender.com/portfolio/regions",
//   sector: "https://backend-hack-0ulp.onrender.com/portfolio/sectors",
// };

// const categoryKeys = {
//   asset: "asset_allocation",
//   regional: "regional_distribution",
//   sector: "sector_distribution",
// };

// const AllocationDashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [insights, setInsights] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("asset");

//   const fetchData = async (category) => {
//     setLoading(true);
//     setError(null);
//     setActiveCategory(category);
  
//     try {
//       const response = await fetch(apiUrls[category]);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const result = await response.json();
  
//       // Find the correct key dynamically (asset_allocation, regional_distribution, sector_distribution)
//       const key = Object.keys(result).find(k => k.includes("_allocation") || k.includes("_distribution"));
  
//       if (key && typeof result[key] === "object") {
//         const formattedData = Object.entries(result[key]).map(([name, value]) => ({
//           name,
//           value: value ?? 0,  // ✅ Ensure value is not undefined
//           color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
//         }));
//         setData(formattedData);
//       } else {
//         setData([]); // ✅ Handle empty/missing responses safely
//       }
  
//       // Safely parse AI insights
//       const insightText = result.ai_insight ? result.ai_insight.replace("```json\n", "").replace("\n```", "") : "{}";
//       try {
//         setInsights(JSON.parse(insightText));
//       } catch (parseError) {
//         console.error("Error parsing AI insight:", parseError);
//         setInsights({});
//       }
//     } catch (err) {
//       setError(err.message);
//       setData([]); // ✅ Prevent stale data
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Fetch assets data on initial render
//   useEffect(() => {
//     fetchData("asset");
//   }, []);

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography>

//       <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>
//         <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//           {["asset", "regional", "sector"].map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "contained" : "outlined"}
//               sx={{
//                 bgcolor: activeCategory === category ? "#FFD166" : "#FFF1CB",
//                 color: "black",
//                 border: "none",
//                 borderRadius: "50px",
//                 outline: "none",
//                 "&:hover": {
//                   bgcolor: activeCategory === category ? "#FFC107" : "#FFE082",
//                 },
//               }}
//               onClick={() => fetchData(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </Button>
//           ))}
//         </Stack>

//         <CardContent>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography color="error">Error: {error}</Typography>
//           ) : data.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
//                     {data.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <Box mt={2}>
//                 {data.map((item, index) => (
//                   <Box
//                     key={index}
//                     display="flex"
//                     justifyContent="space-between"
//                     p={1}
//                     bgcolor="#F7F7F7"
//                     borderRadius={2}
//                     my={1}
//                   >
//                     <Box display="flex" alignItems="center">
//                       <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
//                       <Typography>{item.name}</Typography>
//                     </Box>
//                     <Typography fontWeight="bold">{item.value.toFixed(2)}%</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </>
//           ) : (
//             <Typography>Select a category to load data</Typography>
//           )}
//         </CardContent>
//       </Card>

//       {/* Insights Section */}
//       {insights && (
//         <Card sx={{ mt: 3, p: 3, borderRadius: 3, backgroundColor: "white" }}>
//           <CardContent sx={{ textAlign: "left" }}>
//             <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
//               Overview on {activeCategory}
//             </Typography>
//             <Typography variant="body2" color="gray" mb={2}>
//               AI-generated content and might be incorrect.
//             </Typography>

//             {Object.entries(insights).map(([key, value]) => (
//               <Box key={key} mb={2}>
//                 <Typography variant="h6" fontWeight="bold" color="black">
//                   {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}:
//                 </Typography>
//                 {Array.isArray(value) ? (
//                   <ul style={{ paddingLeft: "20px" }}>
//                     {value.map((item, index) => (
//                       <li key={index}>
//                         <Typography color="black">{item}</Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <Typography variant="body1" color="black">
//                     {typeof value === "object" ? JSON.stringify(value, null, 2) : value}
//                   </Typography>
//                 )}
//               </Box>
//             ))}
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default AllocationDashboard;
// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const apiUrls = {
//   asset: "https://backend-hack-0ulp.onrender.com/portfolio/assets",
//   regional: "https://backend-hack-0ulp.onrender.com/portfolio/regions",
//   sector: "https://backend-hack-0ulp.onrender.com/portfolio/sectors",
// };

// const AllocationDashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [insights, setInsights] = useState({});
//   const [activeCategory, setActiveCategory] = useState("asset");

//   const fetchData = async (category) => {
//     setLoading(true);
//     setError(null);
//     setActiveCategory(category);

//     try {
//       const response = await fetch(apiUrls[category]);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const result = await response.json();

//       // Dynamically determine the key (e.g., asset_allocation, regional_distribution)
//       const key = Object.keys(result).find(k => k.includes("_allocation") || k.includes("_distribution"));

//       if (key && typeof result[key] === "object") {
//         const formattedData = Object.entries(result[key]).map(([name, value]) => ({
//           name,
//           value: typeof value === "number" ? value : 0, // Ensure numerical values
//           color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Generate random color
//         }));
//         setData(formattedData);
//       } else {
//         setData([]); // Prevent stale data
//       }

//       // Safely parse AI insights
//       const insightText = result.ai_insight ? result.ai_insight.replace("```json\n", "").replace("\n```", "") : "{}";
//       try {
//         setInsights(JSON.parse(insightText));
//       } catch (parseError) {
//         console.error("Error parsing AI insight:", parseError);
//         setInsights({});
//       }
//     } catch (err) {
//       setError(err.message);
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData("asset");
//   }, []);

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography>

//       <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>
//         <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//           {["asset", "regional", "sector"].map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "contained" : "outlined"}
//               sx={{
//                 bgcolor: activeCategory === category ? "#FFD166" : "#FFF1CB",
//                 color: "black",
//                 border: "none",
//                 borderRadius: "50px",
//                 outline: "none",
//                 "&:hover": {
//                   bgcolor: activeCategory === category ? "#FFC107" : "#FFE082",
//                 },
//               }}
//               onClick={() => fetchData(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </Button>
//           ))}
//         </Stack>

//         <CardContent>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography color="error">Error: {error}</Typography>
//           ) : data.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
//                     {data.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <Box mt={2}>
//                 {data.map((item, index) => (
//                   <Box
//                     key={index}
//                     display="flex"
//                     justifyContent="space-between"
//                     p={1}
//                     bgcolor="#F7F7F7"
//                     borderRadius={2}
//                     my={1}
//                   >
//                     <Box display="flex" alignItems="center">
//                       <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
//                       <Typography>{item.name}</Typography>
//                     </Box>
//                     <Typography fontWeight="bold">{item.value.toFixed(2)}%</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </>
//           ) : (
//             <Typography>Select a category to load data</Typography>
//           )}
//         </CardContent>
//       </Card>

//       {/* Insights Section */}
//       {insights && Object.keys(insights).length > 0 && (
//         <Card sx={{ mt: 3, p: 3, borderRadius: 3, backgroundColor: "white" }}>
//           <CardContent sx={{ textAlign: "left" }}>
//             <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
//               Overview on {activeCategory}
//             </Typography>
//             <Typography variant="body2" color="gray" mb={2}>
//               AI-generated content and might be incorrect.
//             </Typography>
//             {Object.entries(insights).map(([key, value]) => (
//   <Box key={key} mb={2}>
//     <Typography variant="h6" fontWeight="bold" color="black">
//       {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}:
//     </Typography>

//     {/* Normalize responses */}
//     {typeof value === "object" && !Array.isArray(value) ? (
//       <ul style={{ paddingLeft: "20px" }}>
//         {Object.entries(value).map(([subKey, subValue]) => (
//           <li key={subKey}>
//             <Typography color="black">
//               <strong>{subKey}:</strong> {typeof subValue === "object" ? JSON.stringify(subValue) : String(subValue)}
//             </Typography>
//           </li>
//         ))}
//       </ul>
//     ) : Array.isArray(value) ? (
//       <ul style={{ paddingLeft: "20px" }}>
//         {value.map((item, index) => (
//           <li key={index}>
//             {typeof item === "object" ? (
//               <Typography color="black">{JSON.stringify(item)}</Typography>
//             ) : (
//               <Typography color="black">{String(item)}</Typography>
//             )}
//           </li>
//         ))}
//       </ul>
//     ) : (
//       <Typography variant="body1" color="black">
//         {typeof value === "object" ? JSON.stringify(value) : String(value)}
//       </Typography>
//     )}
//   </Box>
// ))}



//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default AllocationDashboard;
// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const apiUrls = {
//   asset: "https://backend-hack-0ulp.onrender.com/portfolio/assets",
//   regional: "https://backend-hack-0ulp.onrender.com/portfolio/regions",
//   sector: "https://backend-hack-0ulp.onrender.com/portfolio/sectors",
// };

// const AllocationDashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [insights, setInsights] = useState({});
//   const [activeCategory, setActiveCategory] = useState("asset");

//   const fetchData = async (category) => {
//     setLoading(true);
//     setError(null);
//     setActiveCategory(category);

//     try {
//       const response = await fetch(apiUrls[category]);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const result = await response.json();

//       // Dynamically determine the key (e.g., asset_allocation, regional_distribution)
//       const key = Object.keys(result).find(k => k.includes("_allocation") || k.includes("_distribution"));

//       if (key && typeof result[key] === "object") {
//         const formattedData = Object.entries(result[key]).map(([name, value]) => ({
//           name,
//           value: typeof value === "number" ? value : 0, // Ensure numerical values
//           color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Generate random color
//         }));
//         setData(formattedData);
//       } else {
//         setData([]); // Prevent stale data
//       }

//       // Safely parse AI insights
//       const insightText = result.ai_insight ? result.ai_insight.replace("```json\n", "").replace("\n```", "") : "{}";
//       try {
//         setInsights(JSON.parse(insightText));
//       } catch (parseError) {
//         console.error("Error parsing AI insight:", parseError);
//         setInsights({});
//       }
//     } catch (err) {
//       setError(err.message);
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData("asset");
//   }, []);

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Allocation
//       </Typography>

//       <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>
//         <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//           {["asset", "regional", "sector"].map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "contained" : "outlined"}
//               sx={{
//                 bgcolor: activeCategory === category ? "#FFD166" : "#FFF1CB",
//                 color: "black",
//                 border: "none",
//                 borderRadius: "50px",
//                 outline: "none",
//                 "&:hover": {
//                   bgcolor: activeCategory === category ? "#FFC107" : "#FFE082",
//                 },
//               }}
//               onClick={() => fetchData(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </Button>
//           ))}
//         </Stack>

//         <CardContent>
//           {loading ? (
//             <Typography>Loading...</Typography>
//           ) : error ? (
//             <Typography color="error">Error: {error}</Typography>
//           ) : data.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
//                     {data.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <Box mt={2}>
//                 {data.map((item, index) => (
//                   <Box
//                     key={index}
//                     display="flex"
//                     justifyContent="space-between"
//                     p={1}
//                     bgcolor="#F7F7F7"
//                     borderRadius={2}
//                     my={1}
//                   >
//                     <Box display="flex" alignItems="center">
//                       <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%", mr: 1 }}></Box>
//                       <Typography>{item.name}</Typography>
//                     </Box>
//                     <Typography fontWeight="bold">{item.value.toFixed(2)}%</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </>
//           ) : (
//             <Typography>Select a category to load data</Typography>
//           )}
//         </CardContent>
//       </Card>

//       {/* Insights Section */}
//       {insights && Object.keys(insights).length > 0 && (
//         <Card sx={{ mt: 3, p: 3, borderRadius: 3, backgroundColor: "white" }}>
//           <CardContent sx={{ textAlign: "left" }}>
//             <Typography variant="h6" fontWeight="bold" color="#E76A09" gutterBottom>
//               Overview on {activeCategory}
//             </Typography>
//             <Typography variant="body2" color="gray" mb={2}>
//               AI-generated content and might be incorrect.
//             </Typography>
//             {Object.entries(insights).map(([key, value]) => (
//               <Box key={key} mb={2}>
//                 <Typography variant="h6" fontWeight="bold" color="black">
//                   {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}:
//                 </Typography>

//                 {/* Normalize sector responses */}
//                 {typeof value === "object" && !Array.isArray(value) ? (
//                   // Check for sectors like {"Industrial": "20.18%"}
//                   <ul style={{ paddingLeft: "20px" }}>
//                     {Object.entries(value).map(([subKey, subValue]) => (
//                       <li key={subKey}>
//                         <Typography color="black">
//                           <strong>{subKey}:</strong> {subValue}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : Array.isArray(value) ? (
//                   <ul style={{ paddingLeft: "20px" }}>
//                     {value.map((item, index) => (
//                       <li key={index}>
//                         {typeof item === "object" ? (
//                           <Typography color="black">{JSON.stringify(item)}</Typography>
//                         ) : (
//                           <Typography color="black">{String(item)}</Typography>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <Typography variant="body1" color="black">
//                     {String(value)}
//                   </Typography>
//                 )}
//               </Box>
//             ))}
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// };

// export default AllocationDashboard;
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
