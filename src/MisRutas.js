import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Crear from './pages/Crear';

export default function MisRoutes(){
    return (
        <Switch>
            <Route exact path='/' component={Inicio} />
            <Route path='/crear-estudiante' component={Crear}/>
        </Switch>
    );
}