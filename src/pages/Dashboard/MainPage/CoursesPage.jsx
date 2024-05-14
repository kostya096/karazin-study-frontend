import { useGetUserCoursesQuery } from "../../../features/courses/coursesApi.js";
import {styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Container} from '@mui/material';

function CoursesPage() {
    const { data = [] } = useGetUserCoursesQuery();

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

    return (
        <Container>
            <Typography variant="h4" component="h4">
                Ваші курси:
            </Typography>
            {data.map((course, index) => (
                <StyledCard key={index}>
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
            ))}
        </Container>
    );
}

export default CoursesPage;
