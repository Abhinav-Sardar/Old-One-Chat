import React, { createContext, useContext, useState } from 'react'
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import NotfoundPage from './components/NotfoundPage/NotfoundPage' ; 
import Chat from './components/Chat/Chat';
import CreateRoom from './components/CreateRoom/CreateRoom';
export const UserInfoContext = createContext();
const App = () => {
    const [name , setName] = useState('') ; 
    const [room , setRoom] = useState('') ; 
    return (
        <div className = "app">
            <UserInfoContext.Provider value = {[{name , setName} , {room , setRoom}]}>
            <Router>
                <Switch>

                    <Route path = "/" exact>
                        <MainPage/>
                    </Route>

                    <Route path = "/create">
                        <CreateRoom/>
                    </Route>
                    <Route path = "/chat">
                        <Chat/>
                    </Route>

                    <Route path = "*">
                        <NotfoundPage/>
                    </Route>
                </Switch>

            </Router>
            </UserInfoContext.Provider>
        </div>
    )
}

export default App
