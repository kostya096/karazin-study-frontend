import AdminTemplate from "../../components/Admin/AdminTemplate.jsx";
import {Container} from '@mui/material';
import {
    useCreateGroupMutation,
    useDeleteGroupMutation,
    useEditGroupMutation,
    useGetGroupsUsersQuery
} from "../../features/groups/groupsAPI.js";
import GroupsForm from "../../components/Admin/GroupsPage/GroupsForm.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import {useEditUserMutation} from "../../features/user/userAPI.js";
import GroupsPageTable from "../../components/Admin/GroupsPage/GroupsPageTable.jsx";

function GroupsPage() {
    const [editGroupData, setEditGroupData] = useState(null)
    const {data = [], refetch} = useGetGroupsUsersQuery();

    const [createGroup] = useCreateGroupMutation()
    const [deleteGroup] = useDeleteGroupMutation()
    const [editGroup] = useEditGroupMutation()
    const [editUser] = useEditUserMutation()
    const groupFormHandler = async (data) => {
        if (editGroupData) {
            try {
                await editGroup(data).unwrap()
                toast.success('Група успішно оновлена!')
            } catch (e) {
                toast.error('Error updating group, please try later')
            }
            setEditGroupData(null)
            return
        }
        try {
            await createGroup(data).unwrap()
            toast.success('Група успішно створена!')
        } catch (e) {
            toast.error('Error creating group, please try later')
        }
    }
    const handleDeleteGroup = async (groupId) => {
        const confirm = window.confirm('Ви впевнені що хочете видалити групу?')
        if(!confirm) {
            return
        }

        try {
            await deleteGroup(groupId).unwrap()
            toast.success('Група успішно видалена!')
        } catch (e) {
            toast.error('Error deleting group, please try later')
        }
    }
    const handleEditGroup = (group) => {
        setEditGroupData(group)
    }

    const updateUserGroup = async (userId, groupId) => {
        try {
            await editUser({id: userId, usergroup_id: groupId}).unwrap()
            await refetch()
            toast.success('Студент успішно перенесений!')
        } catch (e) {
            toast.error('Error, please try later')
        }
    }

    return (
        <AdminTemplate>
            <Container>
                <GroupsForm
                    onSubmit={groupFormHandler}
                    initialData={editGroupData}
                    setEditGroupData={setEditGroupData}/>

                <GroupsPageTable
                    data={data}
                    handleDeleteGroup={handleDeleteGroup}
                    handleEditGroup={handleEditGroup}
                    updateUserGroup={updateUserGroup}/>
            </Container>
        </AdminTemplate>
    );
}

export default GroupsPage;
