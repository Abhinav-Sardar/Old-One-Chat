import React , {useEffect , useState , useContext , useRef} from 'react'
import qs from 'qs' ; 
import NotfoundPage from '../NotfoundPage/NotfoundPage'
import styles from './Chat.module.css' ; 
import io from 'socket.io-client' ; 
let socket = io('http://localhost:1919/') ; 
const Chat = () => {
    const [name , setName] = useState('') ; 
    const [isValidURL , setIsValidURL] = useState(false) ;
    const [people , setPeople] = useState([]) ; 
    const [roomName , setRoom] = useState('') ; 
    const [messages, setMessages] = useState([]) ;
    const inputRef = useRef() ; 
    useEffect(() => {
        console.log(messages) ; 
    })
    useEffect(() => {
        let {name , room} = qs.parse(window.location.href , {
            ignoreQueryPrefix:true , 
        }) ; 
        if(!name || !room || name === "" || room === ""){
            setIsValidURL(false) ; 
        }
        else {
            setIsValidURL(true) ; 
            setRoom(room) ;
            document.title = `Room - ${room}`
            console.log(socket) ; 
            socket.emit('new' , [name , room]) ; 
            socket.on('room-info' , ppl => setPeople(ppl)) ; 
            socket.on('foreign-message' , msg =>{
                setMessages(prev => [...prev , {type:"msg" , className:"IncomingMessage" , children:msg}]) ; 
            }) ; 
            socket.on('new-user', ppl => setPeople(ppl)) ;
        }
    } , []) ; 


    return (
        <React.Fragment>
            {isValidURL === false ? 
        <NotfoundPage message = "Please join or create a room!"/>
        :
        <div className={styles.page}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    One Chat
                </div>
                <big>
                    Users in chat
                </big>
                <div className={styles.users__wrapper}>
                    {people.length > 0 && people.map(person => (<li className = {styles.user}>{person}</li>))}
                </div>
            </div>
            <div className={styles.chat}>
                <div className={styles.room__info}>
                    <big className={styles.room__name}>Room - {roomName}</big>
                    <button className = {styles.leave} onClick = {() => {
                        window.location.assign('/') ; 
                        socket.disconnect() ; 
                    }}>
                        Leave Room
                    </button>
                </div>
                <div className={styles.main__chat}>
                    {messages.length > 0 && messages.map(msg => {
                        return <Message styles = {styles} className = {msg.className} type = {msg.type}>
                            {msg.children}
                        </Message>
                    })}
                </div>
                <div className={styles.message__box}>
                    <form className={styles.tired} 
                    onSubmit = {(e) => { 
                       e.preventDefault() ; 
                       let value = inputRef.current.value ; 
                       inputRef.current.value = '' ; 
                       socket.emit('message' , [roomName , value]) ; 
                       setMessages([...messages , {
                           type:"msg" , 
                           className : "OutgoingMessage" ,
                           children:value,
                       }])

                    }}
                    >
                        <input type="text" className={styles.message__input} ref = {inputRef} />
                        <button className={styles.send__msg} type = "submit"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            
        </div>  
        }
        </React.Fragment>
    )



}

export default Chat

function Message({type , bg , className , styles , children}) {
    if(type === 'msg'){
        return <div className = {styles[className]}>{children}</div>
    }
    else {
        return <div className = {styles.tooltip} style = {{backgroundColor:bg}}>
            {children}
        </div>
    }
}