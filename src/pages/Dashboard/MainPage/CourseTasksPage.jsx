import {useGetCourseByIdQuery, useGetUserCoursesQuery} from "../../../features/courses/coursesApi.js";
import {styled} from '@mui/material/styles';
import {
    Card,
    CardContent,
    Typography,
    Container,
    CardMedia,
    ButtonBase,
    CardActionArea,
    CircularProgress, Grid, Button
} from '@mui/material';
import {serverURL} from "../../../features/config.js";
import {useGetUserTasksQuery, useSendTaskForReviewMutation} from "../../../features/tasks/tasksApi.js";
import {toast} from "react-toastify";

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

const TaskCard = styled(Card)({
    minWidth: 250,
    margin: '10px',
    padding: '10px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '5px',
    '&:hover': {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    },
});

function CourseTasksPage({setElement, courseId}) {
    const {data: courseData, isLoading: courseLoading} = useGetCourseByIdQuery(courseId);
    const {data: userTasksData, isLoading: tasksLoading} = useGetUserTasksQuery(courseId);

    const [sendTaskForReview] = useSendTaskForReviewMutation()

    const handleMarkAsCompleted = async (taskId) => {
        try {
           await sendTaskForReview(taskId).unwrap()
            toast.success('Задача відіслана на перевірку')
        } catch(e) {
            toast.error('Сталася помилка, спробуйте пізніше')
        }
    };

    if(courseLoading || tasksLoading) {
        return <CircularProgress />;
    }
    return (
        <Container>
            <StyledCard>

                <CardMedia
                    component="img"
                    height="200"
                    image={`${serverURL}/uploaded/${courseData.image.file_name}`}
                    alt={courseData.name}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {courseData.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {courseData.description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Викладачі:
                        {courseData.teachers.map((teacher, index) => (
                            <div key={index}> {teacher.name} {teacher.surname}</div>
                        ))}
                    </Typography>
                </CardContent>
            </StyledCard>
            <Typography variant="h6" component="div">
                Ваші задачі:
            </Typography>
            {userTasksData.length === 0 && (
                <Typography variant="h6" component="div">
                    Задачі відсутні
                </Typography>
            )}
            {userTasksData.map(task => (
                <Grid item xs={12} sm={6} md={4} key={task.id}>
                    <TaskCard>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {task.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {task.description}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Состояние: {task.state}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Оценка: {task.score || '?'}/{task.max_score}
                            </Typography>
                            {task.state !== 'Оцінено' && task.state !== 'Відправлено на перевірку' && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleMarkAsCompleted(task.id)}
                                >
                                    Позначити як виконане
                                </Button>
                            )}
                        </CardContent>
                    </TaskCard>
                </Grid>
            ))}
        </Container>
    );
}

export default CourseTasksPage;
