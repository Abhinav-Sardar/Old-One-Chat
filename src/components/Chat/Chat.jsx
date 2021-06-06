import React from 'react'
import io from 'socket.io-client' ; 
const Chat = () => {
    const socket = io("http://localhost:1919") ; 
    socket.on('new-user' , id => {
        alert(id)
    })
    return (
        <div>
           <center>
               <h1>Hello World</h1>
           </center>
        </div>
    )
}

export default Chat
