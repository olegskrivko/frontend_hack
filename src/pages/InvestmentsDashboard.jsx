import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EuroSymbolIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const investments = [
  {
    category: "Cash",
    items: [{ name: "Available funds", value: "5 425.25 EUR" }]
  },
  {
    category: "Stocks",
    items: [
      { name: "ENEFIT GREEN", value: "533.00 EUR", icon: "🌱" },
      { name: "KALVE COFFEE AS", value: "533.00 EUR", icon: "☕" },
      { name: "NVIDIA", value: "120.69 USD", icon: "🖥" },
      { name: "TESLA", value: "288.14 USD", icon: "🚗" }
    ]
  },
  {
    category: "Funds",
    items: [
      { name: "SWEDBANK ROBUR TECHNOLOGY", value: "533.00 EUR", icon: "🏦" },
      { name: "SWEDBANK ROBUR ACCESS EDGE GLOBAL", value: "533.00 EUR", icon: "🌍" },
      { name: "SWEDBANK ROBUR ACCESS EDGE USA", value: "533.00 EUR", icon: "🇺🇸" }
    ]
  }
];

const InvestmentsDashboard = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: "#FAF3EB", minHeight: "100vh" }}>
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
                <ListItem key={i} divider>
                  <ListItemIcon>{section.category === "Stocks" ? <AttachMoneyIcon /> : <EuroSymbolIcon />}</ListItemIcon>
                  <ListItemText primary={item.name} secondary={item.value} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default InvestmentsDashboard;
