import React, { useEffect, useState } from 'react'
import styles from './CreateRoom.module.css' ; 
import {Link} from 'react-router-dom'

const CreateRoom = () => {
    document.title = "Create A Room"
    const [name , setName] = useState('') ; 
    const [room , setRoom] = useState('') ; 
    const obj = {name , room} ; 
    const handleSubmit = (e) => {
        e.preventDefault() ; 
        if(!name.trim() || !room.trim()){
            alert('Invalid user or room name!')
        }
    }
    return (
        <div className = {styles.page}>
            <form onSubmit = {handleSubmit} className = {styles.form}>
            <div className={styles.wrapper}>
                <label htmlFor="">Name</label>
                <input type="text"
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
                className = {styles.input}
                name = "room"
                required  placeholder = "Your room name"
                value = {room}
                onChange = {(e) => setRoom(e.target.value)}
                />
                </div>
                <center>
                {
                    name.trim() && room.trim() ? 
                    <Link to = {`/chat?&name=${name}&room=${room}`}><button className = {styles.btn}>Create Room</button></Link>
                    :<button className = {styles.btn}>Create Room</button>
                }
                </center>
            </form>
    </div>
    )
}

export default CreateRoom
