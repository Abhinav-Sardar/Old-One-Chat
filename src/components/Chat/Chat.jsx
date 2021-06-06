import React, { useEffect , useState , createContext } from 'react'
import io from 'socket.io-client' ;
import QueryString from 'qs'; 
import NotfoundPage from '../NotfoundPage/NotfoundPage' ; 
import styles from './Chat.module.css' ; 
import {Sidebar , MainChat} from '../Chat-Components/Components'
export const nameContext = createContext() ;
export const roomContext = createContext() ;
export const messagesContext = createContext() ;
const Chat = () => {
    const [isValidURL , setIsValidURL] = useState(false) ;
    const [name , setName] = useState('') ;
    const [room , setRoom] = useState('') ;
    const [messages , setMessages] = useState([]) ; 
    
    
    
    

    const RealChat = () => {
        const socket = io('http://localhost:1919/') ;
        return (
            <nameContext.Provider value = {name}>
                <roomContext.Provider value = {room}>
                    <messagesContext.Provider value = {messages}>
                        <React.Fragment>
                    <div className = {styles.page}>
                        <Sidebar styles = {styles}/>
                        <MainChat styles = {styles}/>
                    </div>
                </React.Fragment>
                    </messagesContext.Provider>
                </roomContext.Provider>
            </nameContext.Provider>
        )
    }
    
    useEffect(() => {
        const {name , room} = QueryString.parse(window.location.href, {
            ignoreQueryPrefix:true ,
        }) ; 
        if(!name || !room) {
            setIsValidURL(false) ; 
        }
        else {
            setName(name) ; 
            setRoom(room) ; 
            setIsValidURL(true) ; 
            document.title = `Room - ${room}` ; 
        }
    } , []) ; 
    return (
        <React.Fragment>
            {
                isValidURL ?
                <RealChat/>
                :
                <NotfoundPage message = "Please join or create a room!"/>
            }
        </React.Fragment>
    )

}





export default Chat
