import React from 'react'
import Header from '../../components/Header'
import CreateTask from '../../components/CreateTask'
import AllTask from '../../components/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard