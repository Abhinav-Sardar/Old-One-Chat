import React from 'react'
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import NotfoundPage from './components/NotfoundPage/NotfoundPage' ; 
import Chat from './components/Chat/Chat';
import CreateRoom from './components/CreateRoom/CreateRoom';
import JoinRoom from './components/Join-Room/JoinRoom';
const App = () => {
    return (
        <div className = "app">
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
                    <Route path = "/join">
                        <JoinRoom/>
                    </Route>
                    <Route path = "*">
                        <NotfoundPage message = "404! We couldnt find the page you were looking for."/>
                    </Route>
                </Switch>

            </Router>
        </div>
    )
}

export default App