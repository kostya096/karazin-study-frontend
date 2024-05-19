import AdminTemplate from "../../components/Admin/AdminTemplate.jsx";
import {Container, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {useGetSolvedTasksQuery, useGetTaskByIdQuery} from "../../features/admin/adminAPI.js";
import IconButton from "@mui/material/IconButton";
import {Add} from "@mui/icons-material";

function TaskReviewPage() {
    const {taskId} = useParams();

    const {data = {}, isLoading} = useGetSolvedTasksQuery(taskId)
    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>;
    }
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
                        Перевірка завдання "{data.task_info.name}"
                    </Typography>

                </div>
                <Typography style={{whiteSpace: 'pre-line'}}>
                    Тут сначала должно идти описание задачи <br/>
                    Потом список юзеров при клике на юзера будет открываться конкретно его задание,<br/>
                    Поле для ввода 0-100 для оценки ( с оценкой )<br/>
                    Поле для ВЫБОРа из выпадающего списка ( 'Призначено', 'Оцінено' )<br/>
                    Кнопка отправить изменения<br/>
                </Typography>
            </Container>
        </AdminTemplate>
    );
}

export default TaskReviewPage;
