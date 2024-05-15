import {useGetUserCoursesQuery} from "../../../features/courses/coursesAPI.js";
import {Typography, Container, CardActionArea, Grid} from '@mui/material';
import {Link} from "react-router-dom"
import DashboardTemplate from "../../../components/Dashboard/DashboardTemplate.jsx";
import CourseCard from "../../../components/Dashboard/CourseCard.jsx";

function CoursesPage() {
    const {data = []} = useGetUserCoursesQuery();
    return (

        <DashboardTemplate>
            <Container>
                <Typography variant="h4" component="h4">
                    Ваші курси:
                </Typography>
                {data.map((course, index) => (
                    <CardActionArea component={Link} to={`/dashboard/courses/${course.id}`} key={index}>
                        <CourseCard courseData={course}/>
                    </CardActionArea>
                ))}
            </Container>
        </DashboardTemplate>
    );
}

export default CoursesPage;
