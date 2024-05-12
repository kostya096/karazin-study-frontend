import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {logoutUser} from "../../features/user/userSlice.js";

function Header() {
    const user = useSelector(state => state.user.user);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleFunctionAndClose = (func) => {
        func()
        setTimeout(handleMenuClose, 100);
    }

    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <NavLink to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                        Karazin Study
                    </NavLink>
                </Typography>

                {user ?
                    <div>
                        <Typography variant="body1" sx={{display: 'flex', alignItems: 'center'}}>
                            Привіт, {user?.name}
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="account"
                                onClick={handleMenuOpen}
                            >
                                <AccountCircleIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem
                                    onClick={() => handleFunctionAndClose(navigate("/user/profile"))}>Profile</MenuItem>
                                <MenuItem
                                    onClick={() => handleFunctionAndClose(dispatch(logoutUser()))}>Logout</MenuItem>
                            </Menu>
                        </Typography>
                    </div>
                    :
                    <NavLink to='/auth/sign_in' style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button color="inherit">Login</Button>
                    </NavLink>
                }
            </Toolbar>
        </AppBar>
    );
}

export default Header;
