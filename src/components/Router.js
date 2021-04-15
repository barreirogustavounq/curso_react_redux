import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Adoptado from '../screens/adoptadoScreen';
import Home from '../screens/homeScreen';
import Login from '../screens/loginScreen';

const AppRouter = () => {
    return(
        <Switch>
        <Route exact path='/' component={Home}>
            <Home/>
        </Route>
        <Route exact path='/login' component={Login}>
            <Login/>
        </Route>
        <Route exact path='/felicidades' component={Adoptado}>
            <Adoptado/>
        </Route>
    </Switch>
    )
}
export default AppRouter;