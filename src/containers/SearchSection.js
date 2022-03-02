import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
import { setCategory } from "../redux/actions/photosActions";

export default function Welcome() {
  const changeCategory = (categoryName) => {
    setCategory(categoryName);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/3646932/pexels-photo-3646932.jpeg?auto=compress&crop=focalpoint&cs=tinysrgb&fit=crop&fp-y=0.4&h=500&sharp=10&w=2000"
        )`,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: 400,
        gap: 1.5,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          maxWidth: "600px",
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        The best free stock photos, royalty free images & videos shared by
        creators.
      </Typography>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 600,
        }}
      >
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Search for free photos"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => changeCategory(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
        ></IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton sx={{ p: "10px" }} aria-label="directions">
          <BiSearchAlt2 />
        </IconButton>
      </Paper>
      <Typography component={"p"} variant={"p"}>
        Suggested: motivational quotes question gold bank muslim business
        meeting more
      </Typography>
    </Box>
  );
}
