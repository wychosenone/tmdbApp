// import { AppBar, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { MovieSearch } from './MovieSearch';
// import { MovieContext } from './MovieContext';
// import { useContext ,useState} from 'react';

// export default function Nav() {
//   const { setMovieInput , setFilter, username, setUsername, signInStatus, setSignInStatus } = useContext(MovieContext);
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleNavigateToMain = () => {
//     navigate('/');
//     setMovieInput('');
//     setFilter({
//         filterType: "",
//         sortDirection: "asc"
//       });
//   };

//   const navigateToF = () => {
//     navigate('/favorite');
//   };

//   const navigateToLogin = () => {
//     navigate('/signin');
//   };

//   const handleSignOut = () => {
//     setUsername('');
//     setSignInStatus(false);
//     navigate('/signin');
//     setAnchorEl(null);
//   };

//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: "#329" }}>
//       <Toolbar style={{ justifyContent: "space-between" }}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <Typography
//             variant="h6"
//             onClick={handleNavigateToMain}
//             style={{
//               cursor: "pointer",
//               textDecoration: "none",
//               color: "#fff",
//               marginRight: "20px",
//               padding: "5px",
//               borderRadius: "5px",
//               transition: "background-color 0.3s ease",
//             }}
//             sx={{
//               "&:hover": {
//                 backgroundColor: "#004",
//               },
//             }}
//           >
//             Home
//           </Typography>

//           <Typography
//             variant="h6"
//             onClick={navigateToF}
//             style={{
//               cursor: "pointer",
//               textDecoration: "none",
//               color: "#fff",
//               marginRight: "20px",
//               padding: "5px",
//               borderRadius: "5px",
//               transition: "background-color 0.3s ease",
//             }}
//             sx={{
//               "&:hover": {
//                 backgroundColor: "#004",
//               },
//             }}
//           >
//             Favourite
//           </Typography>

//           <MovieSearch />

//           {signInStatus ? (
//             <>
//               <Typography
//                 variant="h6"
//                 onClick={handleOpenMenu}
//                 style={{
//                   cursor: "pointer",
//                   textDecoration: "none",
//                   color: "#fff",
//                   marginLeft: "auto",
//                   marginRight: "20px",
//                   padding: "5px",
//                   borderRadius: "5px",
//                   transition: "background-color 0.3s ease",
//                 }}
//                 sx={{
//                   "&:hover": {
//                     backgroundColor: "#004",
//                   },
//                 }}
//               >
//                 {username}
//               </Typography>
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleCloseMenu}
//               >
//                 <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
//               </Menu>
//             </>
//           ) : (
//             <Typography
//               variant="h6"
//               onClick={navigateToLogin}
//               style={{
//                 cursor: "pointer",
//                 textDecoration: "none",
//                 color: "#fff",
//                 marginLeft: "auto",
//                 marginRight: "20px",
//                 padding: "5px",
//                 borderRadius: "5px",
//                 transition: "background-color 0.3s ease",
//               }}
//               sx={{
//                 "&:hover": {
//                   backgroundColor: "#004",
//                 },
//               }}
//             >
//               Sign In
//             </Typography>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MovieSearch } from "./MovieSearch";
import { MovieContext } from "./MovieContext";
import { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Nav() {
  const {
    setMovieInput,
    setFilter,
    username,
    setUsername,
    signInStatus,
    setSignInStatus,
  } = useContext(MovieContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNavigateToMain = () => {
    navigate("/");
    setMovieInput("");
    setFilter({
      filterType: "",
      sortDirection: "asc",
    });
  };

  const navigateToF = () => {
    navigate("/favorite");
  };

  const navigateToLogin = () => {
    navigate("/signin");
  };

  const handleSignOut = () => {
    setUsername("");
    setSignInStatus(false);
    navigate("/signin");
    localStorage.removeItem('signInStatus');
    handleCloseMenu();
  };


  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#329" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            variant="h6"
            onClick={handleNavigateToMain}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#fff",
              marginRight: "20px",
              padding: "5px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Home
          </Typography>

          <Typography
            variant="h6"
            onClick={navigateToF}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#fff",
              marginRight: "20px",
              padding: "5px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Favourite
          </Typography>

          <MovieSearch />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          style={{ marginLeft: "auto" }}
        >
          {signInStatus ? (
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleOpenMenu}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  {username.charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
          ) : (
            <Typography
              variant="h6"
              onClick={navigateToLogin}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
                marginRight: "20px",
                padding: "5px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
            >
              Sign In
            </Typography>
          )}
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={navigateToF}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={navigateToLogin}>
          <Avatar /> My account
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}


// 今天的任务是把searchbar挪到navbar里
