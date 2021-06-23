import React, { useState } from "react";
import styles from "./JoinRoom.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import io from "socket.io-client";
let socket = io("https://whispering-atoll-47602.herokuapp.com/");

const JoinRoom = () => {
	document.title = "Join A Room";
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			name === "" ||
			room === "" ||
			name.trim() === "" ||
			room.trim() === ""
		) {
			toast.error("Invalid username or room name!", {
				position: "top-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				delay: 0,
			});
		} else if (name.length > 20) {
			toast.error("Name too long!", {
				position: "top-right",
				autoClose: 4000,
				delay: 0,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
			});
		} else if (room.length > 50) {
			toast.error("Room name too big!", {
				position: "top-right",
				autoClose: 4000,
				delay: 0,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
			});
		} else {
			socket.emit("req-info");
			socket.on("res-info", (rooms) => {
				console.log(rooms);
				let found = rooms.find((currentRooms) => currentRooms[0] === room);
				if (found === undefined) {
					console.log("FOUND!");
					toast.error("A room with that name doesn't exist!", {
						position: "top-right",
						autoClose: 3000,
						delay: 0,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
					});
					socket.removeAllListeners("res-info");
				} else {
					window.location.assign(`/chat?&name=${name}&room=${room}`);
					socket.disconnect();
				}
			});
		}
	};
	return (
		<div className={styles.page}>
			<center className={styles.heading}>
				<h1>Join</h1>
			</center>
			<br />
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.wrapper}>
					<label htmlFor=''>Name</label>
					<input
						type='text'
						autoComplete={"off"}
						className={styles.input}
						name='name'
						required
						placeholder='Your name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<br />
				<div className={styles.wrapper}>
					<label htmlFor='room'>Room name</label>
					<input
						type='text'
						autoComplete={"off"}
						className={styles.input}
						name='room'
						required
						placeholder='Your room name'
						value={room}
						onChange={(e) => setRoom(e.target.value)}
					/>
				</div>
				<center>
					<button className={styles.btn} type='submit'>
						Join Room
					</button>
				</center>
			</form>
			<ToastContainer />
		</div>
	);
};

export default JoinRoom;
