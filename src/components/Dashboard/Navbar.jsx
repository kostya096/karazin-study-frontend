import React, {useEffect, useState} from 'react';
import {Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, IconButton} from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {styled, useTheme} from '@mui/material/styles';
import {KeyboardArrowLeft, Menu} from "@mui/icons-material";

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-200px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const Navbar = ({items}) => {
    const [open, setOpen] = useState(false);
    const [element, setElement] = useState(null);
    const theme = useTheme();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleItemClick = (pageComponent) => {
        setElement(pageComponent);
        setOpen(false); // Close drawer when an item is clicked
    };

    useEffect(() => {
        setElement(items[0].page);
    }, []);

    const renderListItems = () => {
        return items.map((item, index) => {
            if (item === "divide") {
                return <Divider key={index}/>;
            } else {
                const {title, icon: Icon, page} = item;
                return (
                    <ListItem disablePadding key={title} button onClick={() => handleItemClick(page)}>
                        <ListItemButton sx={{}}>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                <Icon/>
                            </ListItemIcon>
                            <ListItemText primary={title} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                );
            }
        });
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? 240 : theme.spacing(7),
                        boxSizing: 'border-box',
                        marginTop: "64px",
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                    },
                }}
                variant="permanent"
                anchor="left"
                open={open}
            >
                <List>

                    <ListItem disablePadding button onClick={toggleDrawer}>
                        <ListItemButton>
                            <ListItemIcon sx={{color: theme.palette.primary.contrastText}}>
                                {open ? <KeyboardArrowLeft/> : <Menu/>}
                            </ListItemIcon>
                            <ListItemText primary="Навігація"/>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    {renderListItems()}
                </List>
            </Drawer>
            <Main open={open}>
                {element && React.cloneElement(element, {setElement})}
            </Main>
        </Box>
    );
};

export default Navbar;
