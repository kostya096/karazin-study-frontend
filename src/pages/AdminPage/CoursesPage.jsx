import {useState} from 'react';
import CourseTaskForm from "../../components/Dashboard/CreateForm.jsx";
import {useCreateCourseMutation, useUploadCourseImageMutation} from "../../features/courses/coursesAPI.js";
import {toast} from "react-toastify";
import AdminTemplate from "../../components/Admin/AdminTemplate.jsx";
import {Container} from "@mui/material";

function CoursesPage() {
    const [CourseName, setCourseName] = useState('');
    const [CourseDescription, setCourseDescription] = useState('');
    const [CourseImage, setCourseImage] = useState('');
    const [imagePreview, setImagePreview] = useState(null)

    const [createCourse] = useCreateCourseMutation()
    const [uploadImage] = useUploadCourseImageMutation()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setCourseImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleCreateButton = async () => {
        try {
            const formData = new FormData()
            formData.append('file', CourseImage)
            console.log(CourseImage)
            const res = await uploadImage({img_name: CourseName, file: formData}).unwrap()
            const data = {
                name: CourseName,
                description: CourseDescription,
                image_id: res.id,
                groups: [],
                teachers: []
            }

            await createCourse(data).unwrap()
            toast.success('Курс успішно створений!')
            setCourseName('')
            setCourseDescription('')
            setCourseImage('')
            setImagePreview(null)
        } catch (e) {
            toast.error('Сталася помилка, спробуйте пізніше')
        }
    }

    const fields = [
        {name: "Назва курсу", type: "input_text", input: CourseName, set_input: setCourseName},
        {name: "Опис курсу", type: "input_text_big", input: CourseDescription, set_input: setCourseDescription},
        {name: "Зображення курсу", type: "input_image", input: CourseImage, set_input: handleFileChange},
        {name: "Створити", type: "button", input: handleCreateButton}
    ]


    return (
        <AdminTemplate>
            <Container>
                <CourseTaskForm fields={fields} imagePreview={imagePreview}/>
            </Container>
        </AdminTemplate>
    );
}

export default CoursesPage;
