import React from 'react';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import DrawIcon from '@mui/icons-material/Draw';

export default function LeftComponent() {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        color={"white"}
        sx={{
          width: "500px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Prompt Your Creative
      </Typography>
      <TextField
        id="filled-basic"
        multiline
        rows={5}
        variant="outlined"
        placeholder="Enter your text here"
        fullWidth
        sx={{
          width: "500px",
          marginBottom: 2,
          backgroundColor: "white"
        }}
        InputProps={{
          inputProps: {
            style: { color: "black" }, // Set placeholder text color to black
          },
        }}
      />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<DrawIcon />}
        sx={{
          width: "500px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Get Creative
      </Button>
    </Box>
  );
}
