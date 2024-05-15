import {useEffect, useState} from 'react';
import AdminTemplate from "../../components/Admin/AdminTemplate.jsx";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useGetGroupsWithUsers} from "../../features/groups/groupsAPI.js";

function CollapsingTable({data}) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Група</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(group => (
                    <TableRow key={group.id}>
                        <TableCell>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{group.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>ID</TableCell>
                                                <TableCell>Ім'я</TableCell>
                                                <TableCell>Прізвище</TableCell>
                                                <TableCell>Пошта</TableCell>
                                                <TableCell>Дії</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {group.users.map(user => (
                                                <TableRow key={user.id}>
                                                    <TableCell>{user.id}</TableCell>
                                                    <TableCell>{user.firstName}</TableCell>
                                                    <TableCell>{user.lastName}</TableCell>
                                                    <TableCell>{user.email}</TableCell>
                                                    <TableCell>Actions for {user.firstName}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </AccordionDetails>
                            </Accordion>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


function GroupsPage() {
    const {data = []} = useGetGroupsWithUsers();
    console.log(data)
    return (
        <AdminTemplate>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Список груп
                </Typography>
            </div>
            <CollapsingTable data={data}/>
        </AdminTemplate>
    );
}

export default GroupsPage;
