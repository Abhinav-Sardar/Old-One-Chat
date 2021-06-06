import React from 'react'

export const Sidebar = ({styles}) => {
    return (
            <div className={styles.info}>
                        <div className={styles.logo}>
                            ONE Chat
                        </div><br />
                        <div className={styles.users}>
                            <big>
                                Users in chat
                            </big>
                            <div className={styles.users__wrapper}>
                            <li className={styles.user}>Bhaiya</li>
                            <li className={styles.user}>Abhinav</li>
                            <li className={styles.user}>Shanky</li>
                            <li className={styles.user}>Bunny</li>
                            </div>
                        </div>
                    </div>
    )
}

export  function MainChat({styles}) {
    return (
        <div className={styles.chat}>
            <div className={styles.room__info}>
                <big>Room-idk</big>
                <button className = {styles.btn}>Leave room</button>
            </div>
        </div>
    )
}


