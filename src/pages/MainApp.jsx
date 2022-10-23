import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppHeader } from '../cmps/AppHeader';
import { MobileActions } from '../cmps/MobileActions';
import { PostDetails } from './PostDetails';
import { UserFeed } from './UserFeed';
import { UserProfile } from './UserProfile';

export const MainApp = () => {

    return (
        <section className='main-app'>
            <AppHeader />
            <Switch>
                <Redirect exact from="/" to="/feed" />
                <Route path="/post/:postId" component={PostDetails} />
                <Route path="/feed/:userId" component={UserProfile}></Route>
                <Route path="/feed" component={UserFeed}></Route>
            </Switch>
            <MobileActions />
        </section >
    )
}
