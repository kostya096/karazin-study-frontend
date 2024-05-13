import React, {useEffect} from 'react';
import Navbar from "../../components/Dashboard/Navbar.jsx";
import {CastForEducation, Folder, Groups, Home, People, TableView} from "@mui/icons-material";
import MainPage from "../Dashboard/MainPage/MainPage.jsx";
import CoursesPage from "../Dashboard/MainPage/CoursesPage.jsx";
import MarksPage from "../Dashboard/MainPage/MarksPage.jsx";
import UsersPage from "./UsersPage.jsx";
import GroupsPage from "./GroupsPage.jsx";

function AdminPage() {
    const nav_items = [
        {title: "Головна", icon: Home, page: <MainPage/>},
        {title: "Користувачі", icon: People, page: <UsersPage/>},
        {title: "Групи", icon: Groups, page: <GroupsPage/>},
        "divide",
        {title: "Курси", icon: Folder, page: <CoursesPage/>}
    ];
    return (
        <div>
            <Navbar items={nav_items}/>
        </div>
    );
}

export default AdminPage;
