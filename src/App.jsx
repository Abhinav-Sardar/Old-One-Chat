import React from 'react'
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import NotfoundPage from './components/NotfoundPage/NotfoundPage' ; 
const App = () => {
    return (
        <div className = "app">
            <Router>
                <Switch>
                    <Route path = "/" exact>
                        <MainPage/>
                    </Route>
                    <Route path = "*">
                        <NotfoundPage/>
                    </Route>
                </Switch>

            </Router>
        </div>
    )
}

export default App
