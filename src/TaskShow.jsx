import React from 'react'

function TaskShow({ tasks , onDelete}) {
    const deleteTask = () => {
        onDelete(tasks.id)
    }
    return (
        <div>
            <div className='taskCard'>
                <h3>Görev Adı : </h3>
                <p>{tasks.name}</p>
                <h3>Görev Açıklaması</h3>
                <p>{tasks.title}</p>
                <button onClick={deleteTask}>Sil</button>
                <button>Güncelle</button>
            </div>
        </div>
    )
}

export default TaskShow