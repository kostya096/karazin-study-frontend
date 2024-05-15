import React, {useState} from 'react';
import CourseTaskForm from "../../components/Dashboard/CreateForm.jsx";

function CoursesPage() {
    const [CourseName, setCourseName] = useState('');
    const [CourseDescription, setCourseDescription] = useState('');
    const [CourseImage, setCourseImage] = useState('');


    const handleCreateButton = () => {
        console.log(CourseName, CourseDescription);
    }

    const fields = [
        {name: "Назва курсу", type: "input_text", input: CourseName, set_input: setCourseName},
        {name: "Опис курсу", type: "input_text_big", input: CourseDescription, set_input: setCourseDescription},
        {name: "Зображення курсу", type: "input_image", input: CourseImage, set_input: setCourseImage},
        {name: "Створити", type: "button", input: handleCreateButton}
    ]


    return (
        <div>
            <CourseTaskForm fields={fields}/>
        </div>
    );
}

export default CoursesPage;
