import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    Button,
    Checkbox,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import {fetchUsers} from "../../features/admin/actions.js";
import Paginator from "../../components/Admin/Paginator.jsx";
import SearchField from "../../components/Admin/SearchField.jsx";
import AdminTemplate from "../../components/Admin/AdminTemplate.jsx";
import {useDeleteUserMutation} from "../../features/user/userAPI.js";
import {toast} from "react-toastify";


function UsersPage() {
    const dispatch = useDispatch();
    const {users = [], has_next, loading, error} = useSelector((state) => state.admin);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState([]);

    const [deleteUser] = useDeleteUserMutation()
    const updateData = () => {
        dispatch(fetchUsers({
            skip: (currentPage - 1) * 10,
            limit: 10,
            query: query,
            filters: filters
        }));
    }
    useEffect(() => {
        updateData()
    }, [currentPage, filters, dispatch]);


    const handleCheckboxChange = (userId) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleSearch = (query) => {
        updateData()
    }
    const handleChangePage = (page) => {
        setSelectedUsers([])
        setCurrentPage(page);
    };

    const handleDeleteUser = async () => {
        const confirm = window.confirm('Ви впевнені що хочете видалити корисутвачів?')
        if (!confirm) {
            return
        }
        try {
            for (let i = 0; i < selectedUsers.length; i++) {
                await deleteUser(selectedUsers[i]).unwrap()
            }
            toast.success('Корстувачі успішно видалені!')
            updateData()
            setSelectedUsers([])
        } catch (e) {
            toast.error('Error, please try later')
        }
    }


    return (
        <AdminTemplate>
            <Container>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Список користувачів
                    </Typography>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <SearchField sx={{width: 300}} query={query} setQuery={setQuery} searchFunction={handleSearch}/>
                        <div style={{paddingLeft: 50}}>
                            <Button variant="outlined" style={{marginLeft: '8px'}}>
                                Фільтри
                            </Button>
                        </div>
                    </div>

                </div>
                {loading === 'pending' ? <div>Loading...</div> : error ? <div>{error}</div> : (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{width: 15}}></TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Ім'я</TableCell>
                                <TableCell>Прізвище</TableCell>
                                <TableCell>Пошта</TableCell>
                                <TableCell>Група</TableCell>
                            </TableRow>
                        </TableHead>
                        {typeof users === 'object' && !Array.isArray(users) ? null : (
                            <TableBody>

                                {users.map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Checkbox sx={{padding: 0}}
                                                      checked={selectedUsers.includes(user.id)}
                                                      onChange={() => handleCheckboxChange(user.id)}
                                            />
                                        </TableCell>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.surname}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.usergroup.name}</TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>
                        )}
                    </Table>
                )}
                {selectedUsers.length > 0 && (
                    <Box sx={{
                        marginBottom: 2,
                        marginLeft: 10
                    }}>
                        <Typography variant="h6">Дії з виділеними користувачами</Typography>
                        <Button variant="contained" color="error" onClick={() => handleDeleteUser()}>
                            Видалити
                        </Button>
                    </Box>
                )}
                <Paginator currentPage={currentPage} nextPage={has_next} onChangePage={handleChangePage}/>
            </Container>
        </AdminTemplate>
    );
}

export default UsersPage;
