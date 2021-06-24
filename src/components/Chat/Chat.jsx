import React, { useEffect, useState, useRef } from "react";
import qs from "qs";
import styles from "./Chat.module.css";
import io from "socket.io-client";
import "./Picker.css";
import Picker from "react-emojipicker";
import MessageSound from "./Message.wav";
import { ToastContainer, toast } from "react-toastify";
import ScrollToBottom from "react-scroll-to-bottom";
let socket = io("https://whispering-atoll-47602.herokuapp.com/");
const Chat = () => {
	const [name, setName] = useState("");
	const [isValidURL, setIsValidURL] = useState(false);
	const [people, setPeople] = useState([]);
	const [roomName, setRoom] = useState("");
	const sendSound = new Audio(MessageSound);
	const [emojiStyle, setEmojiStyles] = useState("none");
	const [messages, setMessages] = useState([
		{
			type: "tooltip",
			bg: "gold",
			children:
				"You can share the name of this room with others for them to join!",
		},
	]);
	const inputRef = useRef();

	useEffect(() => {
		let { name, room } = qs.parse(window.location.href, {
			ignoreQueryPrefix: true,
		});
		if (!name || !room || name.trim() === "" || room.trim() === "") {
			setIsValidURL(false);
		} else {
			setName(name);
			setIsValidURL(true);
			setRoom(room);
			document.title = `Room - ${room}`;
			socket.emit("new", [name, room]);
			socket.on("room-info", (ppl) => setPeople(ppl));
			socket.on("foreign-message", ([msg, author, created_at]) => {
				setMessages((prev) => [
					...prev,
					{
						type: "msg",
						className: "IncomingMessage",
						children: msg,
						author: author,
						created_at,
					},
				]);
			});
			socket.on("new-user", ([user, ppl]) => {
				setPeople(ppl);
				setMessages((prevMsgs) => [
					...prevMsgs,
					{
						bg: "lime",
						type: "tooltip",
						className: "tooltip",
						children: `${user} has joined the chat.`,
					},
				]);
			});
			socket.on("user-left", ([name, ppl]) => {
				setPeople(ppl);
				setMessages((prevMsgs) => {
					return [
						...prevMsgs,
						{
							type: "tooltip",
							bg: "red",
							children: `${name} has left the chat`,
						},
					];
				});
			});
		}
	}, []);
	useEffect(() => {
		if (messages.length > 1 && messages[messages.length - 1].type === "msg") {
			sendSound.play();
		}
	}, [messages]);
	return (
		<React.Fragment>
			{isValidURL === false ? (
				""
			) : (
				<div className={styles.page}>
					<div
						className={styles.info}
						style={{ flex: emojiStyle === "none" ? 1.5 : 3 }}
					>
						<div className={styles.logo}>One Chat</div>
						<big>Users in chat</big>
						<div className={styles.users__wrapper}>
							{people.length > 0 ? (
								people.map((person) => (
									<li key={getRandomNumberKey()} className={styles.user}>
										{person}
									</li>
								))
							) : (
								<li className={styles.user}>Loading...</li>
							)}
						</div>
					</div>
					<div
						className={styles.chat}
						style={{ width: emojiStyle === "block" ? "60vw" : "80vw" }}
					>
						<div className={styles.room__info}>
							<big className={styles.room__name}>Room - {roomName}</big>
							<button
								className={styles.leave}
								onClick={() => {
									window.location.assign("/");
									socket.emit("disconnect");
								}}
							>
								Leave Room
							</button>
						</div>
						<ScrollToBottom className={styles.main__chat}>
							{messages.length > 0 &&
								messages.map((msg) => {
									return (
										<Message
											styles={styles}
											bg={msg.bg}
											key={getRandomNumberKey()}
											className={msg.className}
											type={msg.type}
											author={msg.author}
											created_at={msg.created_at}
										>
											{msg.children}
										</Message>
									);
								})}
						</ScrollToBottom>
						<div className={styles.message__box}>
							<form
								className={styles.tired}
								onSubmit={(e) => {
									e.preventDefault();
									if (
										inputRef.current.value === "" ||
										inputRef.current.value.trim() === ""
									) {
										toast.error("Invalid message!", {
											position: "top-right",
											autoClose: 4000,
											hideProgressBar: false,
											closeOnClick: false,
											pauseOnHover: false,
											draggable: false,
											progress: undefined,
											delay: 0,
										});
									} else if (inputRef.current.value.length > 1000) {
										toast.error("Message length too big!", {
											position: "top-right",
											autoClose: 4000,
											hideProgressBar: false,
											closeOnClick: false,
											pauseOnHover: false,
											draggable: false,
											progress: undefined,
											delay: 0,
										});
									} else {
										let value = inputRef.current.value;
										inputRef.current.value = "";
										socket.emit("message", [
											roomName,
											value,
											name,
											ReturnFormattedDate(),
										]);
										setMessages([
											...messages,
											{
												type: "msg",
												className: "OutgoingMessage",
												children: value,
												author: name,
												created_at: ReturnFormattedDate(),
											},
										]);
										inputRef.current.focus();
									}
								}}
							>
								<div className={styles.smiley__wrapper}>
									<i
										className={
											emojiStyle === "none" ? "far fa-smile" : "fas fa-times"
										}
										style={{
											color: emojiStyle === "none" ? "purple" : "red",
										}}
										onClick={() =>
											setEmojiStyles(emojiStyle === "block" ? "none" : "block")
										}
									/>
								</div>
								<input
									type='text'
									className={styles.message__input}
									ref={inputRef}
									autoFocus={true}
									disabled={!people.length > 0}
								/>

								<button className={styles.send__msg} type='submit'>
									<i className='fas fa-paper-plane'></i>
								</button>
							</form>
						</div>
					</div>
					<div className={styles.hero_wr} style={{ display: emojiStyle }}>
						<center>Emojis</center>

						<Picker
							onEmojiSelected={(e) => {
								inputRef.current.focus();
								inputRef.current.value += e.unicode;
							}}
							visible={true}
						/>
					</div>
					<ToastContainer />
				</div>
			)}
		</React.Fragment>
	);
};

export default Chat;

function Message({
	type,
	bg,
	className,
	styles,
	children,
	author,
	created_at,
}) {
	if (type === "msg") {
		if (className === "OutgoingMessage") {
			return (
				<div className={styles.msg__wrapper}>
					<div className={styles.name}>
						{"You"} - {created_at}
					</div>
					<div className={styles[className]}>{children}</div>
				</div>
			);
		} else {
			return (
				<div className={styles["msg__wrapper"]}>
					<div className={styles.name__for}>
						{author} - {created_at}
					</div>
					<div className={styles[className]}>{children}</div>
				</div>
			);
		}
	} else {
		return (
			<center className={styles.tooltip} style={{ backgroundColor: bg }}>
				{children}
			</center>
		);
	}
}

const ReturnFormattedDate = () => {
	let date = new Date();
	if (String(date.getMinutes()).length === 1) {
		if (date.getHours() >= 0 && date.getHours() <= 11) {
			if (date.getHours() === 0) {
				return `12:0${date.getMinutes()} AM`;
			} else {
				return `0${date.getHours()}:0${date.getMinutes()} AM`;
			}
		} else {
			if (date.getHours() === 12) {
				return `12:0${date.getMinutes()} PM`;
			} else {
				if (date.getHours() <= 21) {
					return `0${date.getHours() - 12}:0${date.getMinutes()} PM`;
				} else {
					return `${date.getHours() - 12}:0${date.getMinutes()} PM`;
				}
			}
		}
	} else {
		if (date.getHours() >= 0 && date.getHours() <= 11) {
			if (date.getHours() === 0) {
				return `12:${date.getMinutes()} AM`;
			} else {
				return `0${date.getHours()}:${date.getMinutes()} AM`;
			}
		} else {
			if (date.getHours() === 12) {
				return `12:${date.getMinutes()} PM`;
			} else {
				if (date.getHours() <= 21) {
					return `0${date.getHours() - 12}:${date.getMinutes()} PM`;
				} else {
					return `${date.getHours() - 12}:${date.getMinutes()} PM`;
				}
			}
		}
	}
};

function getRandomNumberKey() {
	let sum = 0;
	sum =
		Math.random() -
		((((Math.random() * Math.random()) / Math.random()) * 923) / 90032) *
			2382398 -
		30923 -
		Math.random() * 239023 +
		Math.random();
	return sum;
}
