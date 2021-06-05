import React from 'react'
import styles from './NotfoundPage.module.css' ; 
const NotfoundPage = () => {
    return (
        <div className={styles.page}>
            <marquee behavior="" direction="right">
                <h1 className={styles.message}>404! We couldnt find the page you were looking for.</h1>
            </marquee>
        </div>
    )
}

export default NotfoundPage
// eslint-disable-next-line
