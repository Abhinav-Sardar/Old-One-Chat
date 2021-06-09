import React , {useEffect , useState , useContext , useRef} from 'react'
import qs from 'qs' ; 
import NotfoundPage from '../NotfoundPage/NotfoundPage'
import styles from './Chat.module.css' ; 
const Chat = () => {
    const [name , setName] = useState('') ; 
    const [isValidURL , setIsValidURL] = useState(false) ;
    const [people , setPeople] = useState([]) ; 
    const [roomName , setRoom] = useState('') ; 
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
                    <button className = {styles.leave} onClick = {() => window.location.assign('/')}>
                        Leave Room
                    </button>
                </div>
                <div className={styles.main__chat}>
                </div>
                <div className={styles.message__box}>
                    <form className={styles.tired}>
                        <input type="text" className={styles.message__input} />
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
