import React from 'react';
import Navbar from "../../components/Dashboard/Navbar.jsx";
import MainPage from "./MainPage/MainPage.jsx";
import {CastForEducation, Home, TableView} from "@mui/icons-material";
import MarksPage from "./MainPage/MarksPage.jsx";
import CoursesPage from "./MainPage/CoursesPage.jsx";

function Dashboard() {
    const nav_items = [
        {title: "Головна", icon: Home, page: <MainPage/>},
        {title: "Мої курси", icon: CastForEducation, page: <CoursesPage/>},
        "divide",
        {title: "Оцінки", icon: TableView, page: <MarksPage/>}
    ];

    return (
        <div>
            <Navbar items={nav_items}/>
        </div>
    );
}

export default Dashboard;
