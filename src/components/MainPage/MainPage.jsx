import React, { useEffect } from "react";
import qs from "qs";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import Features from "../Feature/Feature";
const MainPage = () => {
	return (
		<div className={styles.page}>
			<center>
				<div className={styles.icon__Wrapper}>
					<i className='fas fa-comment-alt' id='icon'></i>
				</div>
				<br />
				<h2 className={styles.logo}>One-Chat</h2>
				<p className={styles.content}>
					Best place for <strong>One-Time</strong> chat with anyone in the
					world.
				</p>
				<Link to='/create'>
					<button className={styles.btn}>Create A Room</button>
				</Link>
				<Link to='/join'>
					<button className={styles.btn}>Join A Room</button>
				</Link>
			</center>
			<div className={styles.features}>
				<h4 className={styles.features__header}>Features</h4>
			</div>
			<Features />
		</div>
	);
};

export default MainPage;
