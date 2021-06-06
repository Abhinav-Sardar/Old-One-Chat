import React from 'react'
import styles from './NotfoundPage.module.css' ; 
const NotfoundPage = ({message}) => {
    return (
        <div className={styles.page}>
            <marquee behavior="scroll" direction="right">
                <h1 className={styles.message}>{message}</h1>
            </marquee>
        </div>
    )
}

export default NotfoundPage
// eslint-disable-next-line
