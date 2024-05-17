import {useState} from 'react';
import CourseTaskForm from "../../components/Dashboard/CreateForm.jsx";
import AdminTemplate from "../../components/Admin/AdminTemplate.jsx";
import {Container} from "@mui/material";
import {useParams} from "react-router-dom";

function TaskEditPage() {
    const task_id = useParams();
    const [TaskName, setTaskName] = useState('');
    const [TaskDescription, setTaskDescription] = useState('');
    const [TaskMaxScore, setTaskMaxScore] = useState(100);


    const fields = [
        {name: "Назва таски", type: "input_text", input: TaskName, set_input: setTaskName},
        {name: "Опис таски", type: "input_text_big", input: TaskDescription, set_input: setTaskDescription},
        {name: "Максимальний бал", type: "input_text_big", input: TaskMaxScore, set_input: setTaskMaxScore},
        {name: "Створити", type: "button", input: console.log('test')}
    ]


    return (
        <AdminTemplate>
            <Container>
                <CourseTaskForm form_name="Редагувати завдання на курсі {course_name}" fields={fields}
                                imagePreview={imagePreview}/>
            </Container>
        </AdminTemplate>
    );
}

export default TaskEditPage;
