import {useGetUserCoursesQuery} from "../../../features/courses/coursesApi.js";
import {styled} from '@mui/material/styles';
import {Card, CardContent, Typography, Container, CardMedia, ButtonBase, CardActionArea} from '@mui/material';
import {serverURL} from "../../../features/config.js";
import MainPage from "./MainPage.jsx";

function CourseTasksPage({setElement, courseId}) {
    // const {data = []} = useGetUserCoursesQuery();
    console.log(courseId)


    return (
        <Container>
            <Typography variant="h4" component="h4">
                Картинка
            </Typography>
            <Typography>
                Название курса
            </Typography>
            <Typography>
                Описание курса
            </Typography>
            Дальше должны быть задачи
        </Container>
    );
}

export default CourseTasksPage;
