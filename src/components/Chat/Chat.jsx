import React, { useEffect , useState , createContext } from 'react'
// import io from 'socket.io-client' ;
import QueryString from 'qs'; 
import NotfoundPage from '../NotfoundPage/NotfoundPage' ; 
import styles from './Chat.module.css' ; 
import {Sidebar , MainChat} from '../Chat-Components/Components'
import io from 'socket.io-client' ; 
export const nameContext = createContext() ;
export const roomContext = createContext() ;
export const messagesContext = createContext() ;
export const peopleContext = createContext() ;
const Chat = () => {
    const [isValidURL , setIsValidURL] = useState(false) ;
    const [name , setName] = useState('') ;
    const [room , setRoom] = useState('') ;
    const [messages , setMessages] = useState([]) ; 
    const [people , setPeople] = useState([]); 
    let socket ; 
    


    const RealChat = () => { 
        
        return (
            <peopleContext.Provider value= {[people , setPeople]}>
                            <nameContext.Provider value = {name}>
                <roomContext.Provider value = {room}>
                    <messagesContext.Provider value = {[messages , setMessages]}>
                        <React.Fragment>
                    <div className = {styles.page}>
                        <Sidebar styles = {styles}/>
                        <MainChat styles = {styles}/>
                    </div>
                </React.Fragment>
                    </messagesContext.Provider>
                </roomContext.Provider>
            </nameContext.Provider>
            </peopleContext.Provider>
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
            socket =  io('http://localhost:1919/') ; 
            socket.emit('new' , [name , room]) ; 
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
