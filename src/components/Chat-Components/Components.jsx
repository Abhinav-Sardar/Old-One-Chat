import React, { useContext, useEffect, useState} from 'react'
import {messagesContext , nameContext , roomContext , peopleContext} from '../Chat/Chat'
import {Link} from 'react-router-dom' ; 
import io from 'socket.io-client' ; 


export const Sidebar = ({styles}) => {
//     const messages = useContext(messagesContext) ; 
// // const name = useContext(nameContext) ; 
// // const room = useContext(roomContext) ;
    const [people , setPeople] = useContext(peopleContext) ; 
    return (
            <div className={styles.info}>
                        <div className={styles.logo}>
                            ONE Chat
                        </div><br />
                        <div className={styles.users}>
                            <big>
                                Users in chat
                            </big>
                        </div>
                        <div className = {styles.users__wrapper}>

                        {people.length > 0 && people.map(person => {
                            return <li className = {styles.user}>{person}</li>
                        })}
                        </div>
                    </div>
    )
}

export  function MainChat({styles}) {
    const messages = useContext(messagesContext) ; 
const name = useContext(nameContext) ; 
const room = useContext(roomContext) ;
const [input , setInput] = useState('') ;

const handleSubmit = (e) => {
    e.preventDefault() ;
    setInput('') ; 
}


    return (
        <div className={styles.chat}>
            <div className={styles.room__info}>
                <big className = {styles.room__name}>Room-{room}</big>
                <Link to = "/">
                <button className = {styles.leave}>Leave Room</button>
                </Link>
            </div>
            <div className = {styles.main__chat}>

                <Message styles = {styles} type = "msg" bg = "gold" className ="IncomingMessage">
                    Hello there
                </Message>
                <Message styles = {styles} type = "tooltip" bg = "lime" className = {"tooltip"}>
                    Some one left the chat
                </Message>
            </div>

                <div className = {styles.message__box}>
                    <form className = {styles.tired} onSubmit = {handleSubmit}>
                    <input type="text" className = {styles.message__input}
                    value = {input}
                    onChange = {(e) =>setInput(e.target.value)}
                     />
                    <button type="submit" className={styles.send__msg}>
                    <div className = {styles.icon__container}>
                    <i className="fas fa-paper-plane" id = "icon__send"></i>
                    </div>
                    </button>
                    </form>
                </div>
        </div>
    )
}


export  function Message({bg , type , styles , className , children}) {
    if(type === 'msg'){
        return <div className = {styles[className]}>{children}</div>
    }
    else {
        return <div className = {styles.tooltip} style = {{backgroundColor:bg}}>
            {children}
        </div>
    }
}
/**
 * {
 * type = "msg"
 * className = "OutgoingMessage"
 * children  = state; 
 * }
 * {
 * type = "tooltip"
 * 
 * }
 */

