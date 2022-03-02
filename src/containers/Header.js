import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
export class Header extends React.Component {
  render() {
    return (
      <Box
        px={5}
        py={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#232a34",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
          >
            <path
              d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
              fill="#05A081"
            ></path>
            <path
              d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
              fill="#fff"
            ></path>
          </svg>
          <Typography
            sx={{
              fontSize: 24,
            }}
          >
            Pexels
          </Typography>
        </Box>
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
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for free photos"
            inputProps={{ "aria-label": "search google maps" }}
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
        <List
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItem
            sx={{
              fontSize: 20,
            }}
          >
            Explore
          </ListItem>
          <ListItem
            sx={{
              fontSize: 20,
            }}
          >
            License
          </ListItem>
          <ListItemIcon>
            <BsBell color="#fff" size={20} />
          </ListItemIcon>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 24,
                height: 24,
              }}
              alt="Remy Sharp"
              src=""
            />
          </ListItemAvatar>
        </List>
      </Box>
    );
  }
}
