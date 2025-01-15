import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Tabs,
    Tab,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
    Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Search from './Search'; // Ensure path is correct
import StyledIconButton from './StyledIconButton'; // Import the new component
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Icon for theme toggle
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [toolsAnchorEl, setToolsAnchorEl] = useState(null); // For desktop dropdown
    const [themeAnchorEl, setThemeAnchorEl] = useState(null); // For theme dropdown
    const [colorScheme, setColorScheme] = useState('light'); // Manage theme state
    const [openTools, setOpenTools] = useState(false); // For mobile drawer submenu
    const navigate = useNavigate(); // Initialize navigate

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        setToolsAnchorEl(null); // Close any open menus when drawer is closed
    };

    const handleToolsClick = (event) => {
        if (event.currentTarget.getAttribute('aria-haspopup')) {
            setToolsAnchorEl(event.currentTarget);
        } else {
            setOpenTools(!openTools); // Toggle for mobile submenu
        }
    };

    const handleToolsClose = () => {
        setToolsAnchorEl(null);
    };

    const handleThemeClick = (event) => {
        setThemeAnchorEl(event.currentTarget); // Open theme menu
    };

    const handleThemeClose = () => {
        setThemeAnchorEl(null); // Close theme menu
    };

    const handleThemeChange = (scheme) => {
        setColorScheme(scheme);
        document.documentElement.setAttribute('data-mui-color-scheme', scheme); // Apply theme
        handleThemeClose();
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNavigate = (path) => {
        navigate(path); // Navigate to the provided path
        handleDrawerClose(); // Close the drawer if it's open
    };

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <StyledIconButton onClick={handleDrawerOpen}>
                    <MenuIcon />
                </StyledIconButton>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' }, cursor: 'pointer' }}
                    onClick={() => handleNavigate('/')} // Navigates to Home
                >
                    Strategy on Skates
                </Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}
                    indicatorColor="primary"
                    textColor="inherit"
                >
                    <Tab
                        label="Tools"
                        onClick={handleToolsClick}
                        aria-haspopup="true"
                    />
                    <Tab label="Betting" />
                    <Tab label="Players" />
                    <Tab label="Models" />
                </Tabs>
                <Menu
                    id="tools-menu"
                    anchorEl={toolsAnchorEl}
                    open={Boolean(toolsAnchorEl)}
                    onClose={handleToolsClose}
                >
                    <MenuItem onClick={() => handleNavigate('/draft-simulator')}>Draft Simulator</MenuItem>
                    <MenuItem onClick={handleToolsClose}>GM Mode</MenuItem>
                </Menu>
                <Search sx={{ display: { xs: 'none', md: 'flex' } }} />
                <IconButton onClick={handleThemeClick} color="inherit">
                    <DarkModeIcon />
                </IconButton>
                <Menu
                    id="theme-menu"
                    anchorEl={themeAnchorEl}
                    open={Boolean(themeAnchorEl)}
                    onClose={handleThemeClose}
                >
                    <MenuItem onClick={() => handleThemeChange('light')}>Light Mode</MenuItem>
                    <MenuItem onClick={() => handleThemeChange('dark')}>Dark Mode</MenuItem>
                </Menu>
                <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Login</Button>
                <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Signup</Button>
                <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerClose}>
                    <List component="nav" aria-labelledby="nested-list-subheader">
                        <ListItemButton onClick={handleToolsClick}>
                            <ListItemText primary="Tools" />
                            {openTools ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openTools} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate('/draft-simulator')}>
                                    <ListItemText primary="Draft Simulator" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="GM Mode" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemText primary="Betting" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Players" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Models" />
                        </ListItemButton>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;