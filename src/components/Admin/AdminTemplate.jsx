import React from 'react';
import Navbar from "../Multi/Navbar.jsx";
import {Folder, Groups, Home, People} from "@mui/icons-material";

function AdminTemplate(props) {
    const nav_items = [
        {title: "Головна", icon: Home, link: "/admin"},
        {title: "Користувачі", icon: People, link: "/admin/users"},
        {title: "Групи", icon: Groups, link: "/admin/groups"},
        "divide",
        {title: "Курси", icon: Folder, link: "/admin/courses"}
    ];
    return (
        <Navbar items={nav_items} element={props.children}/>
    );
}

export default AdminTemplate;
