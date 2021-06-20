import React, { useState } from 'react'
import styles from './CreateRoom.module.css' ; 
const CreateRoom = () => {
    document.title = "Create A Room"
    const [name , setName] = useState('') ; 
    const [room , setRoom] = useState('') ; 
    const handleSubmit = (e) => {
        e.preventDefault() ; 
        if(name === '' || room === '' || name.trim() === '' || room.trim() === ''){
            alert('Invalid user or room name') ; 
        }
        else if(name.length > 20) {
            alert('Name too long! Keep a shorter name.')
        }
        else if(room.length >50){
            alert('Room name too big!') ; 
        }
        else {
            window.location.assign(`/chat?&name=${name}&room=${room}`);
        }
    }
    return (
        <div className = {styles.page}>
            <form onSubmit = {handleSubmit} className = {styles.form}>
            <div className={styles.wrapper}>
                <label htmlFor="">Name</label>
                <input type="text"
                 autoComplete = {"off"}
                className = {styles.input}
                name = "name"
                required  placeholder = "Your name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />
                </div>
                <br />
                <div className={styles.wrapper}>
                <label htmlFor="room">Room name</label>
                <input type="text"
                 autoComplete = {"off"}
                className = {styles.input}
                name = "room"
                required  placeholder = "Your room name"
                value = {room}
                onChange = {(e) => setRoom(e.target.value)}
                />
                </div>
                <div className={styles.msg}>
                    NOTE:You will join the room if a room with same name already exists.
                </div>
                <center>
                    <button className = {styles.btn} type = {'submit'}>Create Room</button>
                </center>
            </form>
    </div>
    )
}

export default CreateRoom
