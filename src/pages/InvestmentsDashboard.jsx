// import React from "react";
// import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import EuroSymbolIcon from "@mui/icons-material/Euro";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// const investments = [
//   {
//     category: "Cash",
//     items: [{ name: "Available funds", value: "5 425.25 EUR" }]
//   },
//   {
//     category: "Stocks",
//     items: [
//       { name: "ENEFIT GREEN", value: "533.00 EUR", icon: "🌱" },
//       { name: "KALVE COFFEE AS", value: "533.00 EUR", icon: "☕" },
//       { name: "NVIDIA", value: "120.69 USD", icon: "🖥" },
//       { name: "TESLA", value: "288.14 USD", icon: "🚗" }
//     ]
//   },
//   {
//     category: "Funds",
//     items: [
//       { name: "SWEDBANK ROBUR TECHNOLOGY", value: "533.00 EUR", icon: "🏦" },
//       { name: "SWEDBANK ROBUR ACCESS EDGE GLOBAL", value: "533.00 EUR", icon: "🌍" },
//       { name: "SWEDBANK ROBUR ACCESS EDGE USA", value: "533.00 EUR", icon: "🇺🇸" }
//     ]
//   }
// ];

// const InvestmentsDashboard = () => {
//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB",  }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Investments
//       </Typography>
//       {investments.map((section, index) => (
//         <Accordion key={index} defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
//             <Typography fontWeight="bold">{section.category}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <List>
//               {section.items.map((item, i) => (
//                 <ListItem key={i} divider>
//                   <ListItemIcon>{section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}</ListItemIcon>
//                   <ListItemText primary={item.name} secondary={item.value} />
//                 </ListItem>
//               ))}
//             </List>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </Box>
//   );
// };

// export default InvestmentsDashboard;
// import React, { useState, useEffect } from "react";
// import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, ListItemIcon, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import EuroSymbolIcon from "@mui/icons-material/Euro";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { useLocation, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

// const investments = [
//   {
//     category: "Cash",
//     items: [{ name: "Available funds", value: "5 425.25 EUR" }]
//   },
//   {
//     category: "Stocks",
//     items: [
//       { name: "ENEFIT GREEN", value: "533.00 EUR", icon: "🌱" },
//       { name: "KALVE COFFEE AS", value: "533.00 EUR", icon: "☕" },
//       { name: "NVIDIA", value: "120.69 USD", icon: "🖥" },
//       { name: "AAPL", value: "288.14 USD", icon: "🚗" }
//     ]
//   },
//   {
//     category: "Funds",
//     items: [
//       { name: "SWEDBANK ROBUR TECHNOLOGY", value: "533.00 EUR", icon: "🏦" },
//       { name: "SWEDBANK ROBUR ACCESS EDGE GLOBAL", value: "533.00 EUR", icon: "🌍" },
//       { name: "SWEDBANK ROBUR ACCESS EDGE USA", value: "533.00 EUR", icon: "🇺🇸" }
//     ]
//   }
// ];

// const InvestmentsDashboard = () => {
//   const [openModal, setOpenModal] = useState(false); // Modal visibility
//   const [aiInsight, setAiInsight] = useState(""); // Store AI Insight
//   const [loading, setLoading] = useState(false); // Loading state for fetch request
//   const [selectedStock, setSelectedStock] = useState(""); // Selected stock name
//   const location = useLocation(); // For accessing URL params
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   // Extract the stock name from the URL parameter
//   const queryParams = new URLSearchParams(location.search);
//   const selectedStockName = queryParams.get("symbol");

//   useEffect(() => {
//     if (selectedStockName) {
//       setLoading(true); // Set loading state
//       // Fetch AI insight for the selected stock symbol
//       fetch(`https://backend-hack-0ulp.onrender.com/stocks?symbol=${selectedStockName}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setAiInsight(data.ai_insight); // Set the AI insight from the response
//           setSelectedStock(selectedStockName); // Store the selected stock symbol
//           setOpenModal(true); // Open the modal
//           setLoading(false); // Set loading to false after data is fetched
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setLoading(false); // Handle error and stop loading
//         });
//     }
//   }, [selectedStockName]);

//   // Function to handle stock click and update URL with stock symbol
//   const handleStockClick = (stockName) => {
//     navigate(`/?symbol=${stockName}`); // Update URL with stock symbol as query parameter using navigate
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false); // Close modal
//     navigate("/"); // Reset the URL (remove the stock query param)
//   };

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Investments
//       </Typography>

//       {investments.map((section, index) => (
//         <Accordion key={index} defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
//             <Typography fontWeight="bold">{section.category}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <List>
//               {section.items.map((item, i) => (
//                 <ListItem
//                   key={i}
//                   divider
//                   button
//                   onClick={() => handleStockClick(item.name)} // Handle stock click
//                 >
//                   <ListItemIcon>
//                     {section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={item.name} secondary={item.value} />
//                 </ListItem>
//               ))}
//             </List>
//           </AccordionDetails>
//         </Accordion>
//       ))}

//       {/* Modal for AI Insight */}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>AI Insight for {selectedStock}</DialogTitle>
//         <DialogContent>
//           {loading ? (
//             <Typography variant="body1">Loading AI insight...</Typography> // Show loading text while fetching
//           ) : (
//             <Typography variant="body1">{aiInsight}</Typography> // Show fetched AI insight
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default InvestmentsDashboard;
// import React, { useState, useEffect } from "react";
// import { 
//   Box, Typography, Accordion, AccordionSummary, AccordionDetails, 
//   List, ListItem, ListItemText, ListItemIcon, ListItemButton, 
//   Button, Dialog, DialogActions, DialogContent, DialogTitle 
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import EuroSymbolIcon from "@mui/icons-material/Euro";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { useLocation, useNavigate } from "react-router-dom"; 

// const investments = [
//   {
//     category: "Cash",
//     items: [{ name: "Available funds", value: "5 425.25 EUR" }]
//   },
//   {
//     category: "Stocks",
//     items: [
//       { name: "ENEFIT GREEN", value: "533.00 EUR", icon: "🌱" },
//       { name: "KALVE COFFEE AS", value: "533.00 EUR", icon: "☕" },
//       { name: "NVIDIA", value: "120.69 USD", icon: "🖥" },
//       { name: "AAPL", value: "288.14 USD", icon: "🚗" }
//     ]
//   },
//   {
//     category: "Funds",
//     items: [
//       { name: "SWEDBANK ROBUR TECHNOLOGY", value: "533.00 EUR", icon: "🏦" },
//       { name: "SWEDBANK ROBUR ACCESS EDGE GLOBAL", value: "533.00 EUR", icon: "🌍" },
//       { name: "SWEDBANK ROBUR ACCESS EDGE USA", value: "533.00 EUR", icon: "🇺🇸" }
//     ]
//   }
// ];

// const InvestmentsDashboard = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [aiInsight, setAiInsight] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedStock, setSelectedStock] = useState("");

//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   const selectedStockName = queryParams.get("symbol");

//   useEffect(() => {
//     if (selectedStockName) {
//       setLoading(true);
//       fetch(`https://backend-hack-0ulp.onrender.com/stocks?symbol=${selectedStockName}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setAiInsight(data.ai_insight);
//           setSelectedStock(selectedStockName);
//           setOpenModal(true);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setLoading(false);
//         });
//     }
//   }, [selectedStockName]);

//   const handleStockClick = (stockName) => {
//     navigate(`/?symbol=${stockName}`);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     navigate("/");
//   };

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Investments
//       </Typography>

//       {investments.map((section, index) => (
//         <Accordion key={index} defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
//             <Typography fontWeight="bold">{section.category}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <List>
//               {section.items.map((item, i) => (
//                 <ListItem key={i} divider>
//                   <ListItemButton onClick={() => handleStockClick(item.name)}>
//                     <ListItemIcon>
//                       {section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={item.name} secondary={item.value} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//           </AccordionDetails>
//         </Accordion>
//       ))}

//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>AI Insight for {selectedStock}</DialogTitle>
//         <DialogContent>
//           {loading ? (
//             <Typography variant="body1">Loading AI insight...</Typography>
//           ) : (
//             <Typography variant="body1" component="div">
//             {aiInsight.split("\n").map((line, index) => (
//               <p key={index} style={{ marginBottom: "8px" }}>{line}</p>
//             ))}
//           </Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default InvestmentsDashboard;
// import React, { useState, useEffect } from "react";
// import { 
//   Box, Typography, Accordion,Dialog , AccordionSummary, AccordionDetails, 
//   List, ListItem, ListItemText, ListItemIcon, Button, IconButton 
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import EuroSymbolIcon from "@mui/icons-material/Euro";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { useLocation, useNavigate } from "react-router-dom";

// const investments = [
//   {
//     category: "Cash",
//     items: [{ name: "Available funds", value: "5,425.25 EUR" }]
//   },
//   {
//     category: "Stocks",
//     items: [
//       { 
//         name: "NVIDIA", 
//         symbol: "NVDA", 
//         value: "12,069.00 USD", 
//         price: "120.69 USD", 
//         balance: 100, 
//         dailyChange: "-201.55 USD / -1.67%", 
//         profit: "972.08 USD / 8.76%", 
//         icon: "🖥" 
//       },
//       { 
//         name: "Apple", 
//         symbol: "AAPL", 
//         value: "28,814.00 USD", 
//         price: "288.14 USD", 
//         balance: 50, 
//         dailyChange: "+102.45 USD / 3.56%", 
//         profit: "1,524.67 USD / 5.34%", 
//         icon: "🍏" 
//       }
//     ]
//   },
//   {
//     category: "Funds",
//     items: [
//       { 
//         name: "SWEDBANK ROBUR TECHNOLOGY", 
//         symbol: "TECH", 
//         value: "533.00 EUR", 
//         price: "53.30 EUR", 
//         balance: 10, 
//         dailyChange: "+5.00 EUR / 2.67%", 
//         profit: "25.00 EUR / 4.89%", 
//         icon: "🏦" 
//       }
//     ]
//   }

// ];

// const InvestmentsDashboard = () => {
//   const [expandedStock, setExpandedStock] = useState(null);
//   const [aiInsight, setAiInsight] = useState("");
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   const selectedStockName = queryParams.get("symbol");

//   useEffect(() => {
//     if (selectedStockName) {
//       setLoading(true);
//       fetch(`https://backend-hack-0ulp.onrender.com/stocks?symbol=${selectedStockName}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setAiInsight(data.ai_insight);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setLoading(false);
//         });
//     }
//   }, [selectedStockName]);

//   const handleExpand = (stockName) => {
//     setExpandedStock(expandedStock === stockName ? null : stockName);
//   };

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Investments
//       </Typography>

//       {investments.map((section, index) => (
//         <Accordion key={index} defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
//             <Typography fontWeight="bold">{section.category}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <List>
//               {section.items.map((item, i) => (
//                 <div key={i}>
//                   <ListItem
//                     divider
//                     button
//                     onClick={() => handleExpand(item.name)}
//                   >
//                     <ListItemIcon>
//                       {section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={item.name} secondary={item.value} />
//                     <IconButton onClick={() => handleExpand(item.name)}>
//                       <ExpandMoreIcon />
//                     </IconButton>
//                   </ListItem>

//                   {expandedStock === item.name && (
//                     <Box sx={{ bgcolor: "#FDEEEA", p: 2, borderRadius: 2 }}>
//                       <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
//                        {/* Stock Details using Flexbox */}
//   <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
//     {item.price && (
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography fontWeight="bold">Price:</Typography>
//         <Typography>{item.price}</Typography>
//       </Box>
//     )}
    
//     {item.balance && (
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography fontWeight="bold">Balance/position:</Typography>
//         <Typography>{item.balance}</Typography>
//       </Box>
//     )}

//     {item.dailyChange && (
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography fontWeight="bold">Daily change:</Typography>
//         <Typography color="error">{item.dailyChange}</Typography>
//       </Box>
//     )}

//     {item.profit && (
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography fontWeight="bold">Profit:</Typography>
//         <Typography color="success">{item.profit}</Typography>
//       </Box>
//     )}
//   </Box>
//                       {/* {item.price && <Typography>Price: {item.price}</Typography>}
//                       {item.balance && <Typography>Balance/position: {item.balance}</Typography>}
//                       {item.dailyChange && (
//                         <Typography color="error">Daily change: {item.dailyChange}</Typography>
//                       )}
//                       {item.profit && (
//                         <Typography color="success">Profit: {item.profit}</Typography>
//                       )} */}
//                       <Typography fontWeight="bold" sx={{ mt: 2 }}>AI Comment</Typography>
//                       {loading ? (
//                         <Typography>Loading AI insight...</Typography>
//                       ) : (
//                         <Typography variant="body2">
//                           {aiInsight.length > 150 ? aiInsight.slice(0, 150) + "..." : aiInsight}
//                         </Typography>
//                       )}
//                       {/* <Button sx={{ mt: 1 }} size="small" variant="outlined" onClick={() => navigate(`/?symbol=${item.name}`)}>
//                         Read more
//                       </Button> */}
//                       <Button 
//   sx={{ mt: 1 }} 
//   size="small" 
//   variant="outlined" 
//   onClick={() => navigate(`/?symbol=${item.symbol}`)} // Use symbol instead of name
// >
//   Read more
// </Button>

//                       {/* Buy and Sell Buttons */}
//                       <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//                         <Button sx={{ flex: 1, bgcolor: "#E76A09", color: "#FFF" }}>Buy</Button>
//                         <Button sx={{ flex: 1, borderColor: "#E76A09", color: "#E76A09" }} variant="outlined">Sell</Button>
//                       </Box>
//                     </Box>
//                   )}
//                 </div>
//               ))}
//             </List>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//   <DialogTitle>AI Insight for {selectedStock?.name}</DialogTitle>
//   <DialogContent>
//     {loading ? (
//       <Typography variant="body1">Loading AI insight...</Typography>
//     ) : (
//       <>
//         <Box display="flex" justifyContent="space-between">
//           <Typography fontWeight="bold">Price:</Typography>
//           <Typography>{selectedStock?.price}</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between">
//           <Typography fontWeight="bold">Balance/position:</Typography>
//           <Typography>{selectedStock?.balance}</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between" color="error">
//           <Typography fontWeight="bold">Daily change:</Typography>
//           <Typography>{selectedStock?.dailyChange}</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between" color="success">
//           <Typography fontWeight="bold">Profit:</Typography>
//           <Typography>{selectedStock?.profit}</Typography>
//         </Box>
//         <Typography variant="body1" mt={2}>{aiInsight}</Typography>
//       </>
//     )}
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={handleCloseModal} color="primary">
//       Close
//     </Button>
//   </DialogActions>
// </Dialog>

//     </Box>
//   );
// };

// export default InvestmentsDashboard;
// import React, { useState, useEffect } from "react";
// import { 
//   Box, Typography, Accordion, Dialog, AccordionSummary, AccordionDetails, 
//   List, ListItem, ListItemText, ListItemIcon, Button, IconButton, DialogTitle, DialogContent, DialogActions 
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import EuroSymbolIcon from "@mui/icons-material/Euro";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { useLocation, useNavigate } from "react-router-dom";

// const investments = [
//   {
//     category: "Cash",
//     items: [{ name: "Available funds", value: "5,425.25 EUR" }]
//   },
//   {
//     category: "Stocks",
//     items: [
//       { 
//         name: "NVIDIA", 
//         symbol: "NVDA", 
//         value: "12,069.00 USD", 
//         price: "120.69 USD", 
//         balance: 100, 
//         dailyChange: "-201.55 USD / -1.67%", 
//         profit: "972.08 USD / 8.76%", 
//         icon: "🖥" 
//       },
//       { 
//         name: "Apple", 
//         symbol: "AAPL", 
//         value: "28,814.00 USD", 
//         price: "288.14 USD", 
//         balance: 50, 
//         dailyChange: "+102.45 USD / 3.56%", 
//         profit: "1,524.67 USD / 5.34%", 
//         icon: "🍏" 
//       }
//     ]
//   },
//   {
//     category: "Funds",
//     items: [
//       { 
//         name: "SWEDBANK ROBUR TECHNOLOGY", 
//         symbol: "TECH", 
//         value: "533.00 EUR", 
//         price: "53.30 EUR", 
//         balance: 10, 
//         dailyChange: "+5.00 EUR / 2.67%", 
//         profit: "25.00 EUR / 4.89%", 
//         icon: "🏦" 
//       }
//     ]
//   }
// ];

// const InvestmentsDashboard = () => {
//   const [expandedStock, setExpandedStock] = useState(null);
//   const [aiInsight, setAiInsight] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [openModal, setOpenModal] = useState(false); // state for dialog visibility
//   const [selectedStock, setSelectedStock] = useState(null); // state for selected stock
//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   const selectedStockName = queryParams.get("symbol");

//   useEffect(() => {
//     if (selectedStockName) {
//       setLoading(true);
//       fetch(`https://backend-hack-0ulp.onrender.com/stocks?symbol=${selectedStockName}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setAiInsight(data.ai_insight);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setLoading(false);
//         });
//     }
//   }, [selectedStockName]);

//   const handleExpand = (stockName) => {
//     setExpandedStock(expandedStock === stockName ? null : stockName);
//   };

//   const handleOpenModal = (stock) => {
//     setSelectedStock(stock);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Investments
//       </Typography>

//       {investments.map((section, index) => (
//         <Accordion key={index} defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
//             <Typography fontWeight="bold">{section.category}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <List>
//               {section.items.map((item, i) => (
//                 <div key={i}>
//                   <ListItem
//                     divider
//                     button
//                     onClick={() => handleExpand(item.name)}
//                   >
//                     <ListItemIcon>
//                       {section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={item.name} secondary={item.value} />
//                     <IconButton onClick={() => handleExpand(item.name)}>
//                       <ExpandMoreIcon />
//                     </IconButton>
//                   </ListItem>

//                   {expandedStock === item.name && (
//                     <Box sx={{ bgcolor: "#FDEEEA", p: 2, borderRadius: 2 }}>
//                       <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
//                       <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
//                         {item.price && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Price:</Typography>
//                             <Typography>{item.price}</Typography>
//                           </Box>
//                         )}
                        
//                         {item.balance && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Balance/position:</Typography>
//                             <Typography>{item.balance}</Typography>
//                           </Box>
//                         )}

//                         {item.dailyChange && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Daily change:</Typography>
//                             <Typography color="error">{item.dailyChange}</Typography>
//                           </Box>
//                         )}

//                         {item.profit && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Profit:</Typography>
//                             <Typography color="success">{item.profit}</Typography>
//                           </Box>
//                         )}
//                       </Box>

//                       <Button 
//                         sx={{ mt: 1 }} 
//                         size="small" 
//                         variant="outlined" 
//                         onClick={() => handleOpenModal(item)} // Open modal with selected stock
//                       >
//                         Read more
//                       </Button>

//                       <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//                         <Button sx={{ flex: 1, bgcolor: "#E76A09", color: "#FFF" }}>Buy</Button>
//                         <Button sx={{ flex: 1, borderColor: "#E76A09", color: "#E76A09" }} variant="outlined">Sell</Button>
//                       </Box>
//                     </Box>
//                   )}
//                 </div>
//               ))}
//             </List>
//           </AccordionDetails>
//         </Accordion>
//       ))}

//       {/* Dialog for AI Insight */}
//       {/* <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>AI Insight for {selectedStock?.name}</DialogTitle>
//         <DialogContent>
//           {loading ? (
//             <Typography variant="body1">Loading AI insight...</Typography>
//           ) : (
//             <>
//               <Box display="flex" justifyContent="space-between">
//                 <Typography fontWeight="bold">Price:</Typography>
//                 <Typography>{selectedStock?.price}</Typography>
//               </Box>
//               <Box display="flex" justifyContent="space-between">
//                 <Typography fontWeight="bold">Balance/position:</Typography>
//                 <Typography>{selectedStock?.balance}</Typography>
//               </Box>
//               <Box display="flex" justifyContent="space-between" color="error">
//                 <Typography fontWeight="bold">Daily change:</Typography>
//                 <Typography>{selectedStock?.dailyChange}</Typography>
//               </Box>
//               <Box display="flex" justifyContent="space-between" color="success">
//                 <Typography fontWeight="bold">Profit:</Typography>
//                 <Typography>{selectedStock?.profit}</Typography>
//               </Box>
//               <Typography variant="body1" mt={2}>{aiInsight}</Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog> */}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//   <DialogTitle>AI Insight for {selectedStock?.name}</DialogTitle>
//   <DialogContent>
//     {loading ? (
//       <Typography variant="body1">Loading AI insight...</Typography>
//     ) : (
//       <>
//         <Typography variant="body1">{aiInsight}</Typography>
//       </>
//     )}
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={handleCloseModal} color="primary">
//       Close
//     </Button>
//   </DialogActions>
// </Dialog>

//     </Box>
//   );
// };

// export default InvestmentsDashboard;
// import React, { useState, useEffect } from "react";
// import { 
//   Box, Typography, Accordion, Dialog, AccordionSummary, AccordionDetails, 
//   List, ListItem, ListItemText, ListItemIcon, Button, IconButton, DialogTitle, DialogContent, DialogActions, CircularProgress
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import EuroSymbolIcon from "@mui/icons-material/Euro";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { useLocation, useNavigate } from "react-router-dom";

// const investments = [
//   {
//     category: "Cash",
//     items: [{ name: "Available funds", value: "5,425.25 EUR" }]
//   },
//   {
//     category: "Stocks",
//     items: [
//       { 
//         name: "NVIDIA", 
//         symbol: "NVDA", 
//         value: "12,069.00 USD", 
//         price: "120.69 USD", 
//         balance: 100, 
//         dailyChange: "-201.55 USD / -1.67%", 
//         profit: "972.08 USD / 8.76%", 
//         icon: "🖥" 
//       },
//       { 
//         name: "Apple", 
//         symbol: "AAPL", 
//         value: "28,814.00 USD", 
//         price: "288.14 USD", 
//         balance: 50, 
//         dailyChange: "+102.45 USD / 3.56%", 
//         profit: "1,524.67 USD / 5.34%", 
//         icon: "🍏" 
//       }
//     ]
//   },
//   {
//     category: "Funds",
//     items: [
//       { 
//         name: "SWEDBANK ROBUR TECHNOLOGY", 
//         symbol: "TECH", 
//         value: "533.00 EUR", 
//         price: "53.30 EUR", 
//         balance: 10, 
//         dailyChange: "+5.00 EUR / 2.67%", 
//         profit: "25.00 EUR / 4.89%", 
//         icon: "🏦" 
//       }
//     ]
//   }
// ];

// const InvestmentsDashboard = () => {
//   const [expandedStock, setExpandedStock] = useState(null);
//   const [aiInsight, setAiInsight] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [openModal, setOpenModal] = useState(false); // state for dialog visibility
//   const [selectedStock, setSelectedStock] = useState(null); // state for selected stock
//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   const selectedStockName = queryParams.get("symbol");

//   useEffect(() => {
//     if (selectedStockName) {
//       setLoading(true);
//       fetch(`https://backend-hack-0ulp.onrender.com/stocks?symbol=${selectedStockName}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setAiInsight(data.ai_insight);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setLoading(false);
//         });
//     }
//   }, [selectedStockName]);

//   const handleExpand = (stockName) => {
//     setExpandedStock(expandedStock === stockName ? null : stockName);
//   };

//   const handleOpenModal = (stock) => {
//     setSelectedStock(stock);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Investments
//       </Typography>

//       {investments.map((section, index) => (
//         <Accordion key={index} defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
//             <Typography fontWeight="bold">{section.category}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <List>
//               {section.items.map((item, i) => (
//                 <div key={i}>
//                   <ListItem
//                     divider
//                     button
//                     onClick={() => handleExpand(item.name)}
//                   >
//                     <ListItemIcon>
//                       {section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={item.name} secondary={item.value} />
//                     <IconButton onClick={() => handleExpand(item.name)}>
//                       <ExpandMoreIcon />
//                     </IconButton>
//                   </ListItem>

//                   {expandedStock === item.name && (
//                     <Box sx={{ bgcolor: "#FDEEEA", p: 2, borderRadius: 2 }}>
//                       <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
//                       <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
//                         {item.price && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Price:</Typography>
//                             <Typography>{item.price}</Typography>
//                           </Box>
//                         )}
                        
//                         {item.balance && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Balance/position:</Typography>
//                             <Typography>{item.balance}</Typography>
//                           </Box>
//                         )}

//                         {item.dailyChange && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Daily change:</Typography>
//                             <Typography color="error">{item.dailyChange}</Typography>
//                           </Box>
//                         )}

//                         {item.profit && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Profit:</Typography>
//                             <Typography color="success">{item.profit}</Typography>
//                           </Box>
//                         )}
//                       </Box>

//                       <Button 
//                         sx={{ mt: 1 }} 
//                         size="small" 
//                         variant="outlined" 
//                         onClick={() => handleOpenModal(item)} // Open modal with selected stock
//                       >
//                         Read more
//                       </Button>

//                       <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//                         <Button sx={{ flex: 1, bgcolor: "#E76A09", color: "#FFF" }}>Buy</Button>
//                         <Button sx={{ flex: 1, borderColor: "#E76A09", color: "#E76A09" }} variant="outlined">Sell</Button>
//                       </Box>
//                     </Box>
//                   )}
//                 </div>
//               ))}
//             </List>
//           </AccordionDetails>
//         </Accordion>
//       ))}

//       {/* Dialog for AI Insight */}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>AI Insight for {selectedStock?.name}</DialogTitle>
//         <DialogContent>
//           {loading ? (
//             <Box display="flex" justifyContent="center" alignItems="center" p={2}>
//               <CircularProgress />
//               <Typography sx={{ ml: 2 }}>Loading AI insight...</Typography>
//             </Box>
//           ) : (
//             <>
//               <Typography variant="body1">{aiInsight}</Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default InvestmentsDashboard;
// import React, { useState, useEffect } from "react";
// import { 
//   Box, Typography, Accordion, Dialog, AccordionSummary, AccordionDetails, 
//   List, ListItem, ListItemText, ListItemIcon, Button, IconButton, DialogTitle, DialogContent, DialogActions, CircularProgress
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import EuroSymbolIcon from "@mui/icons-material/Euro";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { useLocation, useNavigate } from "react-router-dom";

// const investments = [
//   {
//     category: "Cash",
//     items: [{ name: "Available funds", value: "5,425.25 EUR" }]
//   },
//   {
//     category: "Stocks",
//     items: [
//       { 
//         name: "NVIDIA", 
//         symbol: "NVDA", 
//         value: "12,069.00 USD", 
//         price: "120.69 USD", 
//         balance: 100, 
//         dailyChange: "-201.55 USD / -1.67%", 
//         profit: "972.08 USD / 8.76%", 
//         icon: "🖥" 
//       },
//       { 
//         name: "Apple", 
//         symbol: "AAPL", 
//         value: "28,814.00 USD", 
//         price: "288.14 USD", 
//         balance: 50, 
//         dailyChange: "+102.45 USD / 3.56%", 
//         profit: "1,524.67 USD / 5.34%", 
//         icon: "🍏" 
//       }
//     ]
//   },
//   {
//     category: "Funds",
//     items: [
//       { 
//         name: "SWEDBANK ROBUR TECHNOLOGY", 
//         symbol: "TECH", 
//         value: "533.00 EUR", 
//         price: "53.30 EUR", 
//         balance: 10, 
//         dailyChange: "+5.00 EUR / 2.67%", 
//         profit: "25.00 EUR / 4.89%", 
//         icon: "🏦" 
//       }
//     ]
//   }
// ];

// const InvestmentsDashboard = () => {
//   const [expandedStock, setExpandedStock] = useState(null);
//   const [aiInsight, setAiInsight] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [openModal, setOpenModal] = useState(false); // state for dialog visibility
//   const [selectedStock, setSelectedStock] = useState(null); // state for selected stock
//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   const selectedStockName = queryParams.get("symbol");

//   useEffect(() => {
//     if (selectedStockName) {
//       setLoading(true);
//       fetch(`https://backend-hack-0ulp.onrender.com/stocks?symbol=${selectedStockName}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setAiInsight(data.ai_insight);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setLoading(false);
//         });
//     }
//   }, [selectedStockName]);

//   const handleExpand = (stockName) => {
//     setExpandedStock(expandedStock === stockName ? null : stockName);
//   };

//   const handleOpenModal = (stock) => {
//     // Update URL with the selected stock symbol
//     setSelectedStock(stock);
//     setOpenModal(true);

//     // Navigate to the detailed view for the selected stock (this will trigger the useEffect to fetch data)
//     navigate(`?symbol=${stock.symbol}`);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     // Optionally, reset the symbol in the URL when closing the modal (to clean up the URL)
//     navigate("");
//   };

//   return (
//     <Box sx={{ p: 2, backgroundColor: "#FAF3EB" }}>
//       <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
//         Investments
//       </Typography>

//       {investments.map((section, index) => (
//         <Accordion key={index} defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
//             <Typography fontWeight="bold">{section.category}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <List>
//               {section.items.map((item, i) => (
//                 <div key={i}>
//                   <ListItem
//                     divider
//                     button={true} // Make sure 'button' is set to true, not a string 'true'
//                     onClick={() => handleExpand(item.name)}
//                   >
//                     <ListItemIcon>
//                       {section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={item.name} secondary={item.value} />
//                     <IconButton onClick={() => handleExpand(item.name)}>
//                       <ExpandMoreIcon />
//                     </IconButton>
//                   </ListItem>

//                   {expandedStock === item.name && (
//                     <Box sx={{ bgcolor: "#FDEEEA", p: 2, borderRadius: 2 }}>
//                       <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
//                       <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
//                         {item.price && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Price:</Typography>
//                             <Typography>{item.price}</Typography>
//                           </Box>
//                         )}
                        
//                         {item.balance && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Balance/position:</Typography>
//                             <Typography>{item.balance}</Typography>
//                           </Box>
//                         )}

//                         {item.dailyChange && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Daily change:</Typography>
//                             <Typography color="error">{item.dailyChange}</Typography>
//                           </Box>
//                         )}

//                         {item.profit && (
//                           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <Typography fontWeight="bold">Profit:</Typography>
//                             <Typography color="success">{item.profit}</Typography>
//                           </Box>
//                         )}
//                       </Box>

//                       <Button 
//                         sx={{ mt: 1 }} 
//                         size="small" 
//                         variant="outlined" 
//                         onClick={() => handleOpenModal(item)} // Open modal with selected stock
//                       >
//                         Read more
//                       </Button>

//                       <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//                         <Button sx={{ flex: 1, bgcolor: "#E76A09", color: "#FFF" }}>Buy</Button>
//                         <Button sx={{ flex: 1, borderColor: "#E76A09", color: "#E76A09" }} variant="outlined">Sell</Button>
//                       </Box>
//                     </Box>
//                   )}
//                 </div>
//               ))}
//             </List>
//           </AccordionDetails>
//         </Accordion>
//       ))}

//       {/* Dialog for AI Insight */}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>AI Insight for {selectedStock?.name}</DialogTitle>
//         <DialogContent>
//           {loading ? (
//             <Box display="flex" justifyContent="center" alignItems="center" p={2}>
//               <CircularProgress />
//               <Typography sx={{ ml: 2 }}>Loading AI insight...</Typography>
//             </Box>
//           ) : (
//             <>
//               <Typography variant="body1">{aiInsight}</Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default InvestmentsDashboard;
import React, { useState, useEffect } from "react";
import { Box, Typography, Accordion, Dialog, AccordionSummary, AccordionDetails, 
  List, ListItem, ListItemText, ListItemIcon, Button, IconButton, DialogTitle, DialogContent, DialogActions, CircularProgress } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EuroSymbolIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useLocation, useNavigate } from "react-router-dom";

const investments = [
  {
    category: "Cash",
    items: [{ name: "Available funds", value: "5,425.25 EUR" }]
  },
  {
    category: "Stocks",
    items: [
      { 
        name: "NVIDIA", 
        symbol: "NVDA", 
        value: "12,069.00 USD", 
        price: "120.69 USD", 
        balance: 100, 
        dailyChange: "-201.55 USD / -1.67%", 
        profit: "972.08 USD / 8.76%", 
        icon: "🖥" 
      },
      { 
        name: "Apple", 
        symbol: "AAPL", 
        value: "28,814.00 USD", 
        price: "288.14 USD", 
        balance: 50, 
        dailyChange: "+102.45 USD / 3.56%", 
        profit: "1,524.67 USD / 5.34%", 
        icon: "🍏" 
      }
    ]
  },
  {
    category: "Funds",
    items: [
      { 
        name: "SWEDBANK ROBUR TECHNOLOGY", 
        symbol: "TECH", 
        value: "533.00 EUR", 
        price: "53.30 EUR", 
        balance: 10, 
        dailyChange: "+5.00 EUR / 2.67%", 
        profit: "25.00 EUR / 4.89%", 
        icon: "🏦" 
      }
    ]
  }
];

const InvestmentsDashboard = () => {
  const [expandedStock, setExpandedStock] = useState(null);
  const [aiInsight, setAiInsight] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const selectedStockName = queryParams.get("symbol");

  useEffect(() => {
    if (selectedStockName) {
      setLoading(true);
      fetch(`https://backend-hack-0ulp.onrender.com/stocks?symbol=${selectedStockName}`)
        .then((response) => response.json())
        .then((data) => {
          setAiInsight(data.ai_insight);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [selectedStockName]);

  const handleExpand = (stockName) => {
    setExpandedStock(expandedStock === stockName ? null : stockName);
  };

  const handleOpenModal = (stock) => {
    setSelectedStock(stock);
    setOpenModal(true);
    navigate(`?symbol=${stock.symbol}`);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("");
  };

  // Function to format AI Insight text, parsing **bold** syntax
  // const formatAiInsightText = (text) => {
  //   // Replace **bold text** with <strong>bold text</strong>
  //   const formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  //   return formattedText;
  // };
  // const formatAiInsightText = (text) => {
  //   // Split the input text by new lines or bullet points (assuming it's split by line breaks or '-')
  //   const lines = text.split("\n");
  
  //   // Process each line by checking if it starts with a bullet point and formatting accordingly
  //   const formattedText = lines.map((line, index) => {
  //     // If the line starts with a bullet point, add styling or change structure
  //     if (line.trim().startsWith("-")) {
  //       return `<div style="margin-left: 20px; font-style: italic;">${line}</div>`; // Indented and italicized bullet points
  //     }
  //     // Otherwise just return the line as normal text
  //     return `<div>${line}</div>`; // Each line as a new block
  //   }).join("");
  
  //   return formattedText;
  // };
  const formatAiInsightText = (text) => {
    // Split the input text by new lines or bullet points (assuming it's split by line breaks or '-')
    const lines = text.split("\n");
  
    // Process each line by checking if it starts with a bullet point and formatting accordingly
    const formattedText = lines.map((line) => {
      // Replace the **word** pattern with <b>word</b> for bold text
      const boldedLine = line.replace(/\*\*(.*?)\*\*/g, (match, p1) => {
        return `<b>${p1}</b>`; // Replace text between ** with <b> for bold
      });
  
      // If the line starts with a bullet point, add styling or change structure
      if (boldedLine.trim().startsWith("-")) {
        return `<div style="margin-left: 20px; font-style: italic;">${boldedLine}</div>`; // Indented and italicized bullet points
      }
      // Otherwise just return the line as normal text
      return `<div>${boldedLine}</div>`; // Each line as a new block
    }).join("");
  
    return formattedText;
  };
  
  

  return (
    <Box sx={{ p: 2, backgroundColor: "#FAF3EB" }}>
      <Typography variant="h5" fontWeight="bold" color="#E76A09" gutterBottom>
        Investments
      </Typography>

      {investments.map((section, index) => (
        <Accordion key={index} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#F7D9D7" }}>
            <Typography fontWeight="bold">{section.category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {section.items.map((item, i) => (
                <div key={i}>
                  <ListItem
                    divider
                    button
                    onClick={() => handleExpand(item.name)}
                  >
                    <ListItemIcon>
                      {section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.name} secondary={item.value} />
                    <IconButton onClick={() => handleExpand(item.name)}>
                      <ExpandMoreIcon />
                    </IconButton>
                  </ListItem>

                  {expandedStock === item.name && (
                    <Box sx={{ bgcolor: "#FDEEEA", p: 2, borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
                        {item.price && (
                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography fontWeight="bold">Price:</Typography>
                            <Typography>{item.price}</Typography>
                          </Box>
                        )}
                        
                        {item.balance && (
                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography fontWeight="bold">Balance/position:</Typography>
                            <Typography>{item.balance}</Typography>
                          </Box>
                        )}

                        {item.dailyChange && (
                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography fontWeight="bold">Daily change:</Typography>
                            <Typography color="error">{item.dailyChange}</Typography>
                          </Box>
                        )}

                        {item.profit && (
                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography fontWeight="bold">Profit:</Typography>
                            <Typography color="success">{item.profit}</Typography>
                          </Box>
                        )}
                      </Box>

                      <Button 
                        sx={{ mt: 1 }} 
                        size="small" 
                        variant="outlined" 
                        onClick={() => handleOpenModal(item)}
                      >
                        Read more
                      </Button>

                      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                        <Button sx={{ flex: 1, bgcolor: "#E76A09", color: "#FFF" }}>Buy</Button>
                        <Button sx={{ flex: 1, borderColor: "#E76A09", color: "#E76A09" }} variant="outlined">Sell</Button>
                      </Box>
                    </Box>
                  )}
                </div>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Dialog for AI Insight */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>AI Insight for {selectedStock?.name}</DialogTitle>
        <DialogContent>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" p={2}>
              <CircularProgress />
              <Typography sx={{ ml: 2 }}>Loading AI insight...</Typography>
            </Box>
          ) : aiInsight ? (
            <>
              <Typography 
                variant="body1" 
                sx={{ marginBottom: 2 }}
                dangerouslySetInnerHTML={{ __html: formatAiInsightText(aiInsight) }} // Insert formatted text
              />
            </>
          ) : (
            <Typography variant="body1" color="error">
              No AI insights available for this stock.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InvestmentsDashboard;
