import React, { Component, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar';
import { StoryList } from '../cmps/StoryList';
import { loadPosts } from '../store/actions/postActions';
import { loadStories } from '../store/actions/srotyActions';

// class _MainApp extends Component {
export const MainApp = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadStories())
        return () => {
        }
    }, [])

    const { stories } = useSelector(state => state.storyModule)
    const { posts } = useSelector(state => state.postModule)
    const { loggedinUser } = useSelector(state => state.userModule)

    if (!loggedinUser) return <div>Loading...</div>
// console.log(loggedinUser);
//     const user = {
//         _id: loggedinUser._id,
//         username: loggedinUser.username,
//         imgUrl: loggedinUser.imgUrl,
//         savedPostIds: loggedinUser.savedUserIds
//     }
    return (
        <section className='main-app'>
            <section className='main-content'>
                <main>
                    <StoryList stories={stories}></StoryList>
                    <PostList posts={posts} user={loggedinUser}></PostList>
                </main>
                <SideBar user={loggedinUser}></SideBar>
            </section>
        </section >
    )
}

// const mapStateToProps = state => {
//     return {
//         posts: state.postModule.posts,
//         stories: state.storyModule.stories,
//         loggedinUser: state.userModule.loggedinUser

//     }
// }
// const mapDispatchToProps = {
//     loadPosts,
//     loadStories,
// }


// export const MainApp = connect(mapStateToProps, mapDispatchToProps)(_MainApp)