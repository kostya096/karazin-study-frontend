import {useSelector} from 'react-redux';
import {useGetTimeTableQuery} from '../../../features/timetable/timetableAPI.js';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    CircularProgress,
    Container
} from '@mui/material';
import DashboardTemplate from "../../../components/Dashboard/DashboardTemplate.jsx";

function MainPage() {
    const user = useSelector(store => store.user.user);
    const {data = {}, isLoading} = useGetTimeTableQuery(user.usergroup.id);
    const day_normalizer = {
        "MONDAY": "Понеділок",
        "TUESDAY": "Вівторок",
        "WEDNESDAY": "Середа",
        "THURSDAY": "Четверг",
        "FRIDAY": "П'ятниця"
    }

    const {upper_lower_week, ...days} = data

    if (isLoading) {
        return <CircularProgress/>
    }


    return (

        <DashboardTemplate>
            <Container>
                Тиждень: <b>{upper_lower_week.toLowerCase() === 'верхня' ? 'верхній' : 'нижній'}</b>
                {Object.keys(days).map((day, key) => (
                    <div key={key}>
                        <Typography variant="h6" gutterBottom>{day_normalizer[day].toUpperCase()}</Typography>
                        {!days[day] ? 'Розклад відсутній' : (
                            <>
                                <TableContainer component={Paper} style={{marginBottom: '20px'}}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Номер заняття</TableCell>
                                                <TableCell>Назва заняття</TableCell>
                                                <TableCell>Тип заняття</TableCell>
                                                <TableCell>Викладач</TableCell>
                                                <TableCell>Посилання</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {Object.keys(data[day]).map((lessonNumber, lessonKey) => (
                                                <TableRow key={lessonKey}>
                                                    <TableCell>{lessonKey + 1}</TableCell>
                                                    <TableCell>{data[day][lessonNumber]?.lesson_name || '-'}</TableCell>
                                                    <TableCell>{data[day][lessonNumber]?.lesson_type || '-'}</TableCell>
                                                    <TableCell>{data[day][lessonNumber]?.teacher || '-'}</TableCell>
                                                    <TableCell>{data[day][lessonNumber]?.url ?
                                                        <a href={data[day][lessonNumber]?.url}>Посилання</a> : '-'}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        )}
                    </div>
                ))}
            </Container>
        </DashboardTemplate>

    );
}

export default MainPage;
