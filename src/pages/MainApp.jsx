import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar';
import { StoryList } from '../cmps/StoryList';
import { loadPosts } from '../store/actions/postActions';
import { loadStories } from '../store/actions/srotyActions';

class _MainApp extends Component {
    componentDidMount() {
        // this.props.loadPosts()
        this.props.loadStories()
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
}


export const MainApp = connect(mapStateToProps, mapDispatchToProps)(_MainApp)