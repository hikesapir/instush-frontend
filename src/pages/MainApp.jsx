import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { AppHeader } from '../cmps/AppHeader';
import { UserFeed } from './UserFeed';
import { UserProfile } from './UserProfile';

export const MainApp = () => {

    return (
        <section className='main-app'>
            <AppHeader></AppHeader>
            <Switch>
                <Route path="/feed/:userId" component={UserProfile}></Route>
                <Route path="/" component={UserFeed}></Route>
            </Switch>
        </section >
    )
}
