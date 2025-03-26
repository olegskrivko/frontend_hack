import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, Divider, Box } from '@mui/material';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/')
      .then(response => {
        setUser(response.data.message.user);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!user) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {user.name}'s Portfolio
      </Typography>
      <Typography variant="h6" gutterBottom>
        Stocks:
      </Typography>
      <List>
        {user.portfolio.stocks.map((stock, index) => (
          <Box key={index}>
            <ListItem>
              <Typography variant="body1">
                <strong>{stock.company} ({stock.symbol})</strong>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Quantity: {stock.quantity}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Purchase Price: ${stock.purchase_price}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Current Price: ${stock.current_price}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                Purchase Date: {stock.purchase_date}
              </Typography>
            </ListItem>
            <Divider sx={{ marginY: 1 }} />
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default UserProfile;
