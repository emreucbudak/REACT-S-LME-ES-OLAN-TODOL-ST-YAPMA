import React from 'react'
import TaskShow from './TaskShow'

function TaskList({ tasks , onDelete}) {
    console.log({tasks})
    return (
        <div className='taskListe'>
            {
                tasks.map((data,index) => {
                    return <TaskShow tasks={data} key={index} onDelete={onDelete}/>
                })
            }
        </div>
    )
}

export default TaskList