// // // import React from "react";
// // // import { Box, Typography, Card, CardContent, Select, MenuItem, Divider, IconButton } from "@mui/material";
// // // import NotificationsIcon from "@mui/icons-material/Notifications";
// // // import MenuIcon from "@mui/icons-material/Menu";
// // // import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// // // const data = [
// // //   { name: "1 Jan", value: 10000 },
// // //   { name: "7 Jan", value: 20000 },
// // //   { name: "19 Jan", value: 15000 },
// // //   { name: "31 Jan", value: 28000 }
// // // ];

// // // const PortfolioDashboard = () => {
// // //   return (
// // //     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
// // //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
// // //         <Typography variant="h6" fontWeight="bold" color="black">Swedbank 🥯</Typography>
// // //         <Box>
// // //           <IconButton>
// // //             <NotificationsIcon color="primary" />
// // //           </IconButton>
// // //           <IconButton>
// // //             <MenuIcon />
// // //           </IconButton>
// // //         </Box>
// // //       </Box>
// // //       <Typography variant="h4" fontWeight="bold" color="#E76A09">My portfolio</Typography>
// // //       <Card sx={{ mt: 2, p: 2, borderRadius: 3, backgroundColor: "white" }}>
// // //         <CardContent>
// // //           <Typography variant="h5" fontWeight="bold" color="#E76A09">Portfolio overview</Typography>
// // //           <Select fullWidth variant="outlined" size="small" sx={{ mt: 1, mb: 2 }}>
// // //             <MenuItem value={1}>Compare with ...</MenuItem>
// // //             <MenuItem value={2}>Swedbank Robur Technology</MenuItem>
// // //             <MenuItem value={3}>Swedbank Robur Access Edge Global</MenuItem>
// // //             <MenuItem value={4}>Swedbank Robur Access Edge USA</MenuItem>
// // //           </Select>
// // //           <Divider sx={{ my: 2 }} />
// // //           <Typography variant="body1" color="gray">Value</Typography>
// // //           <Typography variant="h5" fontWeight="bold" color="red">20.565,76 €</Typography>
// // //           <Typography variant="body1" color="gray" sx={{ mt: 1 }}>Performance</Typography>
// // //           <Typography variant="h5" fontWeight="bold" color="green">+978.02 € (↑0.98%)</Typography>
// // //           <ResponsiveContainer width="100%" height={200}>
// // //             <LineChart data={data}>
// // //               <XAxis dataKey="name" />
// // //               <YAxis hide />
// // //               <Tooltip />
// // //               <Line type="monotone" dataKey="value" stroke="#E76A09" strokeWidth={2} />
// // //             </LineChart>
// // //           </ResponsiveContainer>
// // //         </CardContent>
// // //       </Card>
// // //     </Box>
// // //   );
// // // };

// // // export default PortfolioDashboard;
// // import React, { useState } from "react";
// // import { Box, Typography, Card, CardContent, Select, MenuItem, Divider, IconButton } from "@mui/material";
// // import NotificationsIcon from "@mui/icons-material/Notifications";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// // const data = [
// //   { name: "1 Jan", value: 10000 },
// //   { name: "7 Jan", value: 20000 },
// //   { name: "19 Jan", value: 15000 },
// //   { name: "31 Jan", value: 28000 }
// // ];

// // const PortfolioDashboard = () => {
// //   const [selectedComparison, setSelectedComparison] = useState("Compare with ...");

// //   return (
// //     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
// //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
// //         <Typography variant="h6" fontWeight="bold" color="black">Swedbank 🥯</Typography>
// //         <Box>
// //           <IconButton>
// //             <NotificationsIcon color="primary" />
// //           </IconButton>
// //           <IconButton>
// //             <MenuIcon />
// //           </IconButton>
// //         </Box>
// //       </Box>
// //       <Typography variant="h4" fontWeight="bold" color="#E76A09">My portfolio</Typography>
// //       <Card sx={{ mt: 2, p: 2, borderRadius: 3, backgroundColor: "white" }}>
// //         <CardContent>
// //           <Typography variant="h5" fontWeight="bold" color="#E76A09">Portfolio overview</Typography>
// //           <Select
// //             fullWidth
// //             variant="outlined"
// //             size="small"
// //             sx={{ mt: 1, mb: 2 }}
// //             value={selectedComparison}
// //             onChange={(e) => setSelectedComparison(e.target.value)}
// //           >
// //             <MenuItem value="Compare with ...">Compare with ...</MenuItem>
// //             <MenuItem value="Swedbank Robur Technology">Swedbank Robur Technology</MenuItem>
// //             <MenuItem value="Swedbank Robur Access Edge Global">Swedbank Robur Access Edge Global</MenuItem>
// //             <MenuItem value="Swedbank Robur Access Edge USA">Swedbank Robur Access Edge USA</MenuItem>
// //           </Select>
// //           <Divider sx={{ my: 2 }} />
// //           <Typography variant="body1" color="gray">Value</Typography>
// //           <Typography variant="h5" fontWeight="bold" color="red">20.565,76 €</Typography>
// //           <Typography variant="body1" color="gray" sx={{ mt: 1 }}>Performance</Typography>
// //           <Typography variant="h5" fontWeight="bold" color="green">+978.02 € (↑0.98%)</Typography>
// //           <ResponsiveContainer width="100%" height={200}>
// //             <LineChart data={data}>
// //               <XAxis dataKey="name" />
// //               <YAxis hide />
// //               <Tooltip />
// //               <Line type="monotone" dataKey="value" stroke="#E76A09" strokeWidth={2} />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </CardContent>
// //       </Card>
// //     </Box>
// //   );
// // };

// // export default PortfolioDashboard;
// import React, { useState } from "react";
// import { Box, Typography, Card, CardContent, Select, MenuItem, Divider, IconButton } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MenuIcon from "@mui/icons-material/Menu";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "1 Jan", value: 10000 },
//   { name: "2 Jan", value: 10500 },
//   { name: "3 Jan", value: 11000 },
//   { name: "4 Jan", value: 10800 },
//   { name: "5 Jan", value: 11500 },
//   { name: "6 Jan", value: 12000 },
//   { name: "7 Jan", value: 20000 },
//   { name: "8 Jan", value: 19500 },
//   { name: "9 Jan", value: 18000 },
//   { name: "10 Jan", value: 18500 },
//   { name: "11 Jan", value: 19000 },
//   { name: "12 Jan", value: 17500 },
//   { name: "13 Jan", value: 16000 },
//   { name: "14 Jan", value: 17000 },
//   { name: "15 Jan", value: 18000 },
//   { name: "16 Jan", value: 19000 },
//   { name: "17 Jan", value: 20000 },
//   { name: "18 Jan", value: 21000 },
//   { name: "19 Jan", value: 15000 },
//   { name: "20 Jan", value: 16000 },
//   { name: "21 Jan", value: 17000 },
//   { name: "22 Jan", value: 18000 },
//   { name: "23 Jan", value: 19000 },
//   { name: "24 Jan", value: 20000 },
//   { name: "25 Jan", value: 22000 },
//   { name: "26 Jan", value: 23000 },
//   { name: "27 Jan", value: 24000 },
//   { name: "28 Jan", value: 25000 },
//   { name: "29 Jan", value: 26000 },
//   { name: "30 Jan", value: 27000 },
//   { name: "31 Jan", value: 28000 }
// ];

// const PortfolioDashboard = () => {
//   const [selectedComparison, setSelectedComparison] = useState("Compare with ...");

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6" fontWeight="bold" color="black">Swedbank 🥯</Typography>
//         <Box>
//           <IconButton>
//             <NotificationsIcon color="primary" />
//           </IconButton>
//           <IconButton>
//             <MenuIcon />
//           </IconButton>
//         </Box>
//       </Box>
//       <Typography variant="h4" fontWeight="bold" color="#E76A09">My portfolio</Typography>
//       <Card sx={{ mt: 2, p: 2, borderRadius: 3, backgroundColor: "white" }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" color="#E76A09">Portfolio overview</Typography>
//           <Select
//             fullWidth
//             variant="outlined"
//             size="small"
//             sx={{ mt: 1, mb: 2 }}
//             value={selectedComparison}
//             onChange={(e) => setSelectedComparison(e.target.value)}
//           >
//             <MenuItem value="Compare with ...">Compare with ...</MenuItem>
//             <MenuItem value="Swedbank Robur Technology">Swedbank Robur Technology</MenuItem>
//             <MenuItem value="Swedbank Robur Access Edge Global">Swedbank Robur Access Edge Global</MenuItem>
//             <MenuItem value="Swedbank Robur Access Edge USA">Swedbank Robur Access Edge USA</MenuItem>
//           </Select>
//           <Divider sx={{ my: 2 }} />
//           <Typography variant="body1" color="gray">Value</Typography>
//           <Typography variant="h5" fontWeight="bold" color="red">20.565,76 €</Typography>
//           <Typography variant="body1" color="gray" sx={{ mt: 1 }}>Performance</Typography>
//           <Typography variant="h5" fontWeight="bold" color="green">+978.02 € (↑0.98%)</Typography>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={data}>
//               <XAxis dataKey="name" interval={4} />
//               <YAxis hide />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#E76A09" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default PortfolioDashboard;
// import React, { useState } from "react";
// import { Box, Typography, Card, CardContent, Select, MenuItem, Divider, IconButton } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MenuIcon from "@mui/icons-material/Menu";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const userPortfolio = [
//   { name: "1 Jan", value: 10000 },
//   { name: "7 Jan", value: 20000 },
//   { name: "13 Jan", value: 16000 },
//   { name: "19 Jan", value: 15000 },
//   { name: "25 Jan", value: 22000 },
//   { name: "31 Jan", value: 28000 }
// ];

// const swedbankTechnology = [
//   { name: "1 Jan", value: 12000 },
//   { name: "7 Jan", value: 18000 },
//   { name: "13 Jan", value: 17000 },
//   { name: "19 Jan", value: 14000 },
//   { name: "25 Jan", value: 20000 },
//   { name: "31 Jan", value: 26000 }
// ];

// const swedbankGlobal = [
//   { name: "1 Jan", value: 11000 },
//   { name: "7 Jan", value: 19000 },
//   { name: "13 Jan", value: 17500 },
//   { name: "19 Jan", value: 16000 },
//   { name: "25 Jan", value: 21000 },
//   { name: "31 Jan", value: 27000 }
// ];

// const swedbankUSA = [
//   { name: "1 Jan", value: 10500 },
//   { name: "7 Jan", value: 18500 },
//   { name: "13 Jan", value: 16500 },
//   { name: "19 Jan", value: 15500 },
//   { name: "25 Jan", value: 20500 },
//   { name: "31 Jan", value: 26500 }
// ];

// const funds = {
//   "Swedbank Robur Technology": swedbankTechnology,
//   "Swedbank Robur Access Edge Global": swedbankGlobal,
//   "Swedbank Robur Access Edge USA": swedbankUSA
// };

// const PortfolioDashboard = () => {
//   const [selectedComparison, setSelectedComparison] = useState("");

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6" fontWeight="bold" color="black">Swedbank 🥯</Typography>
//         <Box>
//           <IconButton>
//             <NotificationsIcon color="primary" />
//           </IconButton>
//           <IconButton>
//             <MenuIcon />
//           </IconButton>
//         </Box>
//       </Box>
//       <Typography variant="h4" fontWeight="bold" color="#E76A09">My portfolio</Typography>
//       <Card sx={{ mt: 2, p: 2, borderRadius: 3, backgroundColor: "white" }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" color="#E76A09">Portfolio overview</Typography>
//           <Select
//             fullWidth
//             variant="outlined"
//             size="small"
//             sx={{ mt: 1, mb: 2 }}
//             value={selectedComparison}
//             onChange={(e) => setSelectedComparison(e.target.value)}
//           >
//             <MenuItem value="">Compare with ...</MenuItem>
//             <MenuItem value="Swedbank Robur Technology">Swedbank Robur Technology</MenuItem>
//             <MenuItem value="Swedbank Robur Access Edge Global">Swedbank Robur Access Edge Global</MenuItem>
//             <MenuItem value="Swedbank Robur Access Edge USA">Swedbank Robur Access Edge USA</MenuItem>
//           </Select>
//           <Divider sx={{ my: 2 }} />
//           <Typography variant="body1" color="gray">Value</Typography>
//           <Typography variant="h5" fontWeight="bold" color="red">20.565,76 €</Typography>
//           <Typography variant="body1" color="gray" sx={{ mt: 1 }}>Performance</Typography>
//           <Typography variant="h5" fontWeight="bold" color="green">+978.02 € (↑0.98%)</Typography>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart>
//               <XAxis dataKey="name" interval={1} />
//               <YAxis hide />
//               <Tooltip />
//               {/* User's Portfolio */}
//               <Line type="monotone" data={userPortfolio} dataKey="value" stroke="#E76A09" strokeWidth={2} name="My Portfolio" />
//               {/* Comparison Fund (Only if selected) */}
//               {selectedComparison && funds[selectedComparison] && (
//                 <Line
//                   type="monotone"
//                   data={funds[selectedComparison]}
//                   dataKey="value"
//                   stroke={selectedComparison === "Swedbank Robur Technology" ? "#007BFF" :
//                           selectedComparison === "Swedbank Robur Access Edge Global" ? "#28A745" :
//                           "#FFC107"}
//                   strokeWidth={2}
//                   name={selectedComparison}
//                   strokeDasharray="5 5"
//                 />
//               )}
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default PortfolioDashboard;
// import React, { useState } from "react";
// import { Box, Typography, Card, CardContent, Select, MenuItem, Divider, IconButton } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MenuIcon from "@mui/icons-material/Menu";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// // Define data sets as before
// const userPortfolio = [
//   { name: "1 Jan", value: 10000 },
//   { name: "7 Jan", value: 20000 },
//   { name: "13 Jan", value: 16000 },
//   { name: "19 Jan", value: 15000 },
//   { name: "25 Jan", value: 22000 },
//   { name: "31 Jan", value: 28000 }
// ];

// const swedbankTechnology = [
//   { name: "1 Jan", value: 12000 },
//   { name: "7 Jan", value: 18000 },
//   { name: "13 Jan", value: 17000 },
//   { name: "19 Jan", value: 14000 },
//   { name: "25 Jan", value: 20000 },
//   { name: "31 Jan", value: 26000 }
// ];

// const swedbankGlobal = [
//   { name: "1 Jan", value: 11000 },
//   { name: "7 Jan", value: 19000 },
//   { name: "13 Jan", value: 17500 },
//   { name: "19 Jan", value: 16000 },
//   { name: "25 Jan", value: 21000 },
//   { name: "31 Jan", value: 27000 }
// ];

// const swedbankUSA = [
//   { name: "1 Jan", value: 10500 },
//   { name: "7 Jan", value: 18500 },
//   { name: "13 Jan", value: 16500 },
//   { name: "19 Jan", value: 15500 },
//   { name: "25 Jan", value: 20500 },
//   { name: "31 Jan", value: 26500 }
// ];

// const funds = {
//   "Swedbank Robur Technology": swedbankTechnology,
//   "Swedbank Robur Access Edge Global": swedbankGlobal,
//   "Swedbank Robur Access Edge USA": swedbankUSA
// };

// const PortfolioDashboard = () => {
//   const [selectedComparison, setSelectedComparison] = useState("");

//   // Merge user portfolio and selected fund data based on 'name'
//   const mergeData = (userData, comparisonData) => {
//     const combinedData = userData.map((userEntry) => {
//       const comparisonEntry = comparisonData.find((compEntry) => compEntry.name === userEntry.name);
//       return {
//         name: userEntry.name,
//         userValue: userEntry.value,
//         comparisonValue: comparisonEntry ? comparisonEntry.value : null
//       };
//     });
//     return combinedData;
//   };

//   const mergedData = selectedComparison
//     ? mergeData(userPortfolio, funds[selectedComparison])
//     : userPortfolio.map(entry => ({ name: entry.name, userValue: entry.value }));

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h6" fontWeight="bold" color="black">Swedbank 🥯</Typography>
//         <Box>
//           <IconButton>
//             <NotificationsIcon color="primary" />
//           </IconButton>
//           <IconButton>
//             <MenuIcon />
//           </IconButton>
//         </Box>
//       </Box>
//       <Typography variant="h4" fontWeight="bold" color="#E76A09">My portfolio</Typography>
//       <Card sx={{ mt: 2, p: 2, borderRadius: 3, backgroundColor: "white" }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" color="#E76A09">Portfolio overview</Typography>
//           <Select
//             fullWidth
//             variant="outlined"
//             size="small"
//             sx={{ mt: 1, mb: 2 }}
//             value={selectedComparison}
//             onChange={(e) => setSelectedComparison(e.target.value)}
//           >
//             <MenuItem value="">Compare with ...</MenuItem>
//             <MenuItem value="Swedbank Robur Technology">Swedbank Robur Technology</MenuItem>
//             <MenuItem value="Swedbank Robur Access Edge Global">Swedbank Robur Access Edge Global</MenuItem>
//             <MenuItem value="Swedbank Robur Access Edge USA">Swedbank Robur Access Edge USA</MenuItem>
//           </Select>
//           <Divider sx={{ my: 2 }} />
//           <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
//     <Box>
//       <Typography variant="body1" color="gray">Value</Typography>
//       <Typography variant="h5" fontWeight="bold" color="red">20.565,76 €</Typography>
//     </Box>
//     <Box>
//       <Typography variant="body1" color="gray">Performance</Typography>
//       <Typography variant="h5" fontWeight="bold" color="green">+978.02 € (↑0.98%)</Typography>
//     </Box>
//   </Box>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={mergedData}>
//               <XAxis dataKey="name" interval={1} />
//               <YAxis hide />
//               <Tooltip />
//               {/* User's Portfolio */}
//               <Line type="monotone" dataKey="userValue" stroke="#E76A09" strokeWidth={2} name="My Portfolio" />
//               {/* Comparison Fund (Only if selected) */}
//               {selectedComparison && (
//                 <Line
//                   type="monotone"
//                   dataKey="comparisonValue"
//                   stroke={selectedComparison === "Swedbank Robur Technology" ? "#007BFF" :
//                           selectedComparison === "Swedbank Robur Access Edge Global" ? "#28A745" :
//                           "#FFC107"}
//                   strokeWidth={2}
//                   name={selectedComparison}
//                   strokeDasharray="5 5"
//                 />
//               )}
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default PortfolioDashboard;
import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Select, MenuItem, Divider, IconButton, Chip } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Define data sets as before
const userPortfolio = [
  { name: "1 Jan", value: 10000 },
  { name: "7 Jan", value: 20000 },
  { name: "13 Jan", value: 16000 },
  { name: "19 Jan", value: 15000 },
  { name: "25 Jan", value: 22000 },
  { name: "31 Jan", value: 28000 }
];

const swedbankTechnology = [
  { name: "1 Jan", value: 12000 },
  { name: "7 Jan", value: 18000 },
  { name: "13 Jan", value: 17000 },
  { name: "19 Jan", value: 14000 },
  { name: "25 Jan", value: 20000 },
  { name: "31 Jan", value: 26000 }
];

const swedbankGlobal = [
  { name: "1 Jan", value: 11000 },
  { name: "7 Jan", value: 19000 },
  { name: "13 Jan", value: 17500 },
  { name: "19 Jan", value: 16000 },
  { name: "25 Jan", value: 21000 },
  { name: "31 Jan", value: 27000 }
];

const swedbankUSA = [
  { name: "1 Jan", value: 10500 },
  { name: "7 Jan", value: 18500 },
  { name: "13 Jan", value: 16500 },
  { name: "19 Jan", value: 15500 },
  { name: "25 Jan", value: 20500 },
  { name: "31 Jan", value: 26500 }
];

const funds = {
  "Swedbank Robur Technology": swedbankTechnology,
  "Swedbank Robur Access Edge Global": swedbankGlobal,
  "Swedbank Robur Access Edge USA": swedbankUSA
};

const PortfolioDashboard = () => {
  const [selectedComparison, setSelectedComparison] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M");

  const timeframes = ["1M", "3M", "6M", "YTD", "1Y", "ALL"];

  // Merge user portfolio and selected fund data based on 'name'
  const mergeData = (userData, comparisonData) => {
    const combinedData = userData.map((userEntry) => {
      const comparisonEntry = comparisonData.find((compEntry) => compEntry.name === userEntry.name);
      return {
        name: userEntry.name,
        userValue: userEntry.value,
        comparisonValue: comparisonEntry ? comparisonEntry.value : null
      };
    });
    return combinedData;
  };

  const mergedData = selectedComparison
    ? mergeData(userPortfolio, funds[selectedComparison])
    : userPortfolio.map(entry => ({ name: entry.name, userValue: entry.value }));

  return (
    <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold" color="black">Swedbank 🥯</Typography>
        <Box>
          <IconButton>
            <NotificationsIcon color="primary" />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="h4" fontWeight="bold" color="#E76A09">My portfolio</Typography>
      <Card sx={{ mt: 2, p: 2, borderRadius: 3, backgroundColor: "white" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" color="#E76A09">Portfolio overview</Typography>
          <Select
            fullWidth
            variant="outlined"
            size="small"
            sx={{ mt: 1, mb: 2 }}
            value={selectedComparison}
            onChange={(e) => setSelectedComparison(e.target.value)}
          >
            <MenuItem value="">Compare with ...</MenuItem>
            <MenuItem value="Swedbank Robur Technology">Swedbank Robur Technology</MenuItem>
            <MenuItem value="Swedbank Robur Access Edge Global">Swedbank Robur Access Edge Global</MenuItem>
            <MenuItem value="Swedbank Robur Access Edge USA">Swedbank Robur Access Edge USA</MenuItem>
          </Select>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
            <Box>
              <Typography variant="body1" color="gray">Value</Typography>
              <Typography variant="h5" fontWeight="bold" color="red">20.565,76 €</Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="gray">Performance</Typography>
              <Typography variant="h5" fontWeight="bold" color="green">+978.02 € (↑0.98%)</Typography>
            </Box>
          </Box>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mergedData}>
              <XAxis dataKey="name" interval={1} />
              <YAxis hide />
              <Tooltip />
              {/* User's Portfolio */}
              <Line type="monotone" dataKey="userValue" stroke="#E76A09" strokeWidth={2} name="My Portfolio" />
              {/* Comparison Fund (Only if selected) */}
              {selectedComparison && (
                <Line
                  type="monotone"
                  dataKey="comparisonValue"
                  stroke={selectedComparison === "Swedbank Robur Technology" ? "#007BFF" :
                          selectedComparison === "Swedbank Robur Access Edge Global" ? "#28A745" :
                          "#FFC107"}
                  strokeWidth={2}
                  name={selectedComparison}
                  strokeDasharray="5 5"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
          {/* Chips for Timeframe Filter */}
          <Box sx={{ mt: 2 }}>
            {timeframes.map((timeframe) => (
              <Chip
                key={timeframe}
                label={timeframe}
                variant={selectedTimeframe === timeframe ? "filled" : "outlined"}
                color={selectedTimeframe === timeframe ? "primary" : "default"}
                onClick={() => setSelectedTimeframe(timeframe)}
                sx={{ margin: 0.5 }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PortfolioDashboard;
