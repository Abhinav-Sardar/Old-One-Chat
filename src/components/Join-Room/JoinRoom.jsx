import React, { useState } from 'react'
import styles from './JoinRoom.module.css' ; 
import 'react-toastify/dist/ReactToastify.css' ; 
import {ToastContainer , toast} from 'react-toastify'



const JoinRoom = () => {
    document.title = "Create A Room"
    const [name , setName] = useState('') ; 
    const [room , setRoom] = useState('') ; 
    const handleSubmit = (e) => {
        e.preventDefault() ; 
        if(name === '' || room === '' || name.trim() === '' || room.trim() === ''){
            toast.error('Invalid username or room name!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                delay:0,
                
            }) ; 
        }
        else if(name.length > 20) {
            toast.error('Name too long!', {
                position: "top-right",
                autoClose: 4000,
                delay:0,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                })
        }
        else if(room.length >50){
            toast.error('Room name too big!', {
                position: "top-right",
                autoClose: 4000,
                delay:0,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                }) 
        }
        else {
            window.location.assign(`/chat?&name=${name}&room=${room}`);
        }
    }
    return (
        <div className = {styles.page}>
            <div className="page__info">
                
            </div>
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
                    NOTE:You will create and join the room if a room with given name doesn't exists.
                </div>
                <center>
                    <button className = {styles.btn} type = "submit">
                        Join Room
                    </button>
                </center>
            </form>
            <ToastContainer/>
    </div>
    )
}

export default JoinRoom
