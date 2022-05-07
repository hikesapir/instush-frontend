import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppHeader } from '../cmps/AppHeader';
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar';
import { StoryList } from '../cmps/StoryList';
import { loadPosts } from '../store/actions/postActions';
import { loadStories } from '../store/actions/srotyActions';
import { loadLoggedinUser } from '../store/actions/userActions';

class _MainApp extends Component {
    componentDidMount() {
        this.props.loadPosts()
        this.props.loadStories()
        this.props.loadLoggedinUser()
    }

    render() {
        const { posts, stories, loggedinUser } = this.props
        if (!loggedinUser) return <div>Loading...</div>
        const user = {
            _id: loggedinUser._id,
            username: loggedinUser.username,
            imgUrl: loggedinUser.imgUrl
        }
        return (
            <section className='main-app'>
                <AppHeader userImg={loggedinUser.imgUrl}></AppHeader>
                <section className='main-content'>
                    <main>
                        <StoryList stories={stories}></StoryList>
                        <PostList posts={posts} user={user}></PostList>
                    </main>
                    <SideBar user={loggedinUser}></SideBar>
                </section>
            </section >
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postModule.posts,
        stories: state.storyModule.stories,
        loggedinUser: state.userModule.loggedinUser

    }
}
const mapDispatchToProps = {
    loadPosts,
    loadStories,
    loadLoggedinUser
}


export const MainApp = connect(mapStateToProps, mapDispatchToProps)(_MainApp)