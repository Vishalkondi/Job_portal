// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import Home from "./components/Home";
// // import Profile from "./components/Profile";
// // import PostJob from "./components/PostJob";
// // import JobListings from "./components/JobListings";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // function App() {
// //   return (
// //     <Router>
// //       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
// //         <div className="container">
// //           <Link className="navbar-brand" to="/">Job Portal</Link>
// //           <div className="navbar-nav">
// //             <Link className="nav-link" to="/profile">Profile</Link>
// //             <Link className="nav-link" to="/post-job">Post Job</Link>
// //             <Link className="nav-link" to="/jobs">Jobs</Link>
// //           </div>
// //         </div>
// //       </nav>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/post-job" element={<PostJob />} />
// //         <Route path="/jobs" element={<JobListings />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import PostJob from "./components/PostJob";
// import JobListings from "./components/JobListings";
// import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";
// import "./App.css"; // Add custom styles if needed

// function App() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <Router>
//       {/* Navbar */}
//       <AppBar position="sticky" sx={{ background: "#007bff" }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             <Link to="/" className="nav-logo">Job Portal</Link>
//           </Typography>
//           <div className="nav-links">
//             <Link to="/profile" className="nav-link">Profile</Link>
//             <Link to="/post-job" className="nav-link">Post Job</Link>
//             <Link to="/jobs" className="nav-link">Jobs</Link>
//           </div>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar for Mobile View */}
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <List sx={{ width: 250 }}>
//           <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button component={Link} to="/profile" onClick={toggleDrawer(false)}>
//             <ListItemText primary="Profile" />
//           </ListItem>
//           <ListItem button component={Link} to="/post-job" onClick={toggleDrawer(false)}>
//             <ListItemText primary="Post Job" />
//           </ListItem>
//           <ListItem button component={Link} to="/jobs" onClick={toggleDrawer(false)}>
//             <ListItemText primary="Jobs" />
//           </ListItem>
//         </List>
//       </Drawer>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/post-job" element={<PostJob />} />
//         <Route path="/jobs" element={<JobListings />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PostJob from "./components/PostJob";
import JobListings from "./components/JobListings";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import "./App.css"; // Custom styles

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Router>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ background: "#1976D2", padding: "8px 0" }}>
        <Toolbar>
          {/* Sidebar Menu Button */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* Brand Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            <Link to="/" className="nav-logo">Job Portal</Link>
          </Typography>

          {/* Navbar Links (Visible on Desktop) */}
          <div className="nav-links">
            <Link to="/" className="nav-link"><HomeIcon fontSize="small" /> Home</Link>
            <Link to="/profile" className="nav-link"><PersonIcon fontSize="small" /> Profile</Link>
            <Link to="/post-job" className="nav-link"><AddCircleIcon fontSize="small" /> Post Job</Link>
            <Link to="/jobs" className="nav-link"><WorkIcon fontSize="small" /> Jobs</Link>
          </div>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Drawer) for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/profile" onClick={toggleDrawer(false)}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/post-job" onClick={toggleDrawer(false)}>
            <ListItemIcon><AddCircleIcon /></ListItemIcon>
            <ListItemText primary="Post Job" />
          </ListItem>
          <ListItem button component={Link} to="/jobs" onClick={toggleDrawer(false)}>
            <ListItemIcon><WorkIcon /></ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItem>
        </List>
      </Drawer>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/jobs" element={<JobListings />} />
      </Routes>
    </Router>
  );
}

export default App;

