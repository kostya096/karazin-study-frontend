import {useGetUserCoursesQuery} from "../../../features/courses/coursesApi.js";
import {styled} from '@mui/material/styles';
import {Card, CardContent, Typography, Container, CardMedia, ButtonBase, CardActionArea} from '@mui/material';
import {serverURL} from "../../../features/config.js";
import MainPage from "./MainPage.jsx";
import CourseTasksPage from "./CourseTasksPage.jsx";

function CoursesPage({setElement}) {
    const {data = []} = useGetUserCoursesQuery();
    const StyledCard = styled(Card)({
        minWidth: 275,
        margin: '10px',
        padding: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
        },
    });
    const handleCardClick = (courseId) => {
        setElement(<CourseTasksPage setElement={setElement} courseId={courseId}/>)
    };
    return (
        <Container>
            <Typography variant="h4" component="h4">
                Ваші курси:
            </Typography>
            {data.map((course, index) => (
                <CardActionArea onClick={() => {
                    handleCardClick(course.id)
                }}>
                    <StyledCard key={index}>

                        <CardMedia
                            component="img"
                            height="200"
                            image={`${serverURL}/uploaded/${course.image.file_name}`}
                            alt={course.name}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {course.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {course.description}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Викладачі:
                                {course.teachers.map((teacher, index) => (
                                    <div key={index}> {teacher.name} {teacher.surname}</div>
                                ))}
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </CardActionArea>
            ))}
        </Container>
    );
}

export default CoursesPage;
