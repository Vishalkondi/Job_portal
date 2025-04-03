import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkIcon from "@mui/icons-material/Work";

function JobListings() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(JSON.parse(localStorage.getItem("jobs")) || []);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🚀 Available Job Listings
      </Typography>

      {jobs.length === 0 ? (
        <Typography align="center" color="textSecondary" variant="h6">
          ❌ No jobs available at the moment.
        </Typography>
      ) : (
        jobs.map((job, index) => (
          <Card key={index} sx={{ mb: 3, p: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" color="primary" gutterBottom>
                <WorkIcon sx={{ mr: 1 }} /> {job.title}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                <BusinessIcon sx={{ mr: 1 }} /> {job.company}
              </Typography>

              <Box display="flex" alignItems="center" gap={2} sx={{ mt: 1 }}>
                <Typography variant="body1">
                  <LocationOnIcon sx={{ mr: 1 }} /> {job.location}
                </Typography>
                <Typography variant="body1">
                  <MonetizationOnIcon sx={{ mr: 1, color: "green" }} /> ${job.salary}
                </Typography>
              </Box>

              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                {job.description}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default JobListings;
