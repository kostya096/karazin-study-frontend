import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemText, IconButton} from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import {styled, useTheme} from '@mui/material/styles';
import MainPage from "../../pages/Dashboard/MainPage/MainPage.jsx";
import {CastForEducation, Home, KeyboardArrowLeft, TableView} from "@mui/icons-material";
import MarksPage from "../../pages/Dashboard/MainPage/MarksPage.jsx";
import CoursesPage from "../../pages/Dashboard/MainPage/CoursesPage.jsx";
import MenuIcon from "@mui/icons-material/Menu";


const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-240px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [element, setElement] = useState(<MainPage/>);
    const theme = useTheme();
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            {open ? null : (
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{mr: 1}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Навігація
                    </Typography>
                </Toolbar>
            )}
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        marginTop: "64px"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Toolbar>
                    <IconButton onClick={toggleDrawer}>
                        <KeyboardArrowLeft/>
                    </IconButton>
                </Toolbar>
                <Divider/>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setElement(<MainPage/>)}>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Головна"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setElement(<CoursesPage/>)}>
                            <ListItemIcon>
                                <CastForEducation/>
                            </ListItemIcon>
                            <ListItemText primary="Мої курси"/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setElement(<MarksPage/>)}>
                            <ListItemIcon>
                                <TableView/>
                            </ListItemIcon>
                            <ListItemText primary="Оцінки"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open}>
                {element}
            </Main>
        </Box>
    );
};

export default Navbar;
