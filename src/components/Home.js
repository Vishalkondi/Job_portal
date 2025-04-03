import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./Home.css"; // Ensure this file exists for background styling

function Home() {
  return (
    <Box
      className="home-container"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('https://source.unsplash.com/1600x900/?office,job')`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
        }}
      />
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Welcome to the Job Portal
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
          Find your dream job or post job openings easily!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<WorkIcon />}
            sx={{ fontSize: "1.2rem", px: 3 }}
          >
            Browse Jobs
          </Button>
          <Button
            component={Link}
            to="/post-job"
            variant="contained"
            color="success"
            size="large"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ fontSize: "1.2rem", px: 3 }}
          >
            Post a Job
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
