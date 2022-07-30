import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { AppHeader } from '../cmps/AppHeader';
import { loadPosts, setFilterBy } from '../store/actions/postActions';
import { loadLoggedinUser } from '../store/actions/userActions';
import { PostDetails } from './PostDetails';
import { UserFeed } from './UserFeed';
import { UserProfile } from './UserProfile';


// class _MainApp extends Component {
export const MainApp = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadLoggedinUser())
        // dispatch(loadPosts())
    }, [])


    return (
        <section className='main-app'>
            <AppHeader></AppHeader>
            <Switch>
                <Route path="/post/:postId" component={PostDetails}></Route>
                <Route path="/feed/:userId" component={UserProfile}></Route>
                <Route path="/" component={UserFeed}></Route>
            </Switch>
        </section >
    )
}
