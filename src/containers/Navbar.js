import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  return (
    <Box
      mt={2}
      sx={{
        textAlign: "center",
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined">
        {["Home", "Discover", "Vedios", "Leaderboard", "Chellanges"].map(
          (item) => (
            <Button key={item} sx={{ border: "none", color: "black" }}>
              {item}
            </Button>
          )
        )}
      </ButtonGroup>
    </Box>
  );
}
