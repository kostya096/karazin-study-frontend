import {Typography, Container, CardActionArea, Grid, Button} from '@mui/material';
import {Link} from "react-router-dom"
import AdminTemplate from "../../components/Admin/AdminTemplate.jsx";
import CourseCard from "../../components/Dashboard/CourseCard.jsx";
import {useGetAdminCoursesQuery} from "../../features/courses/coursesAPI.js";
import SearchField from "../../components/Admin/SearchField.jsx";
import {Add} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";


function CoursesPage() {
    const {data = []} = useGetAdminCoursesQuery();
    return (

        <AdminTemplate>
            <Container>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 15,
                    marginTop: 30
                }}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Список всіх курсів та завдань
                    </Typography>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <IconButton color="primary" size="large" component={Link} to="/admin/courses/create">
                                <Add/>
                            </IconButton>
                        </div>
                    </div>

                </div>
                {data.map((course, index) => (
                    <CardActionArea component={Link} to={`/admin/courses/edit/${course.id}`} key={index}>
                        <CourseCard courseData={course}/>
                    </CardActionArea>
                ))}
            </Container>
        </AdminTemplate>
    );
}

export default CoursesPage;
