import React, { useState } from 'react'

function AddTask({onCreate}) {
    const [taskName,setTaskName] = useState("")
    const [taskDesc,setTaskDesc] = useState("")
    const changeName = (e) => {
        setTaskName(e.target.value)
        e.preventDefault()
    }
    const changeDesc = (e) => {
        setTaskDesc(e.target.value)
        e.preventDefault()
    }
    const submitTask = (e) => {
        e.preventDefault();
        onCreate(taskName,taskDesc)
        setTaskName("")
        setTaskDesc("")
    }

    return (
        <div>
            <form action="" className='form'>
                <p>Görev Adı Ekle</p>
                <input type="text" name="" id="" value={taskName} onChange={changeName}/>
                <p>Görev Açıklaması Ekle</p>
                <textarea name="" id="" value={taskDesc} onChange={changeDesc}></textarea>
                <button type='submit' onClick={submitTask}>Görev Ekle</button>
            </form>
        </div>
    )
}

export default AddTask