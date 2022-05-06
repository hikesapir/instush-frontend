import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar';
import { StoryList } from '../cmps/StoryList';
import { loadPosts, likeClicked } from '../store/actions/postActions';
import { loadStories } from '../store/actions/srotyActions';
import { loadLoggedinUser } from '../store/actions/userActions';

class _MainApp extends Component {
    componentDidMount() {
        this.props.loadPosts()
        this.props.loadStories()
        this.props.loadLoggedinUser()
    }

    onClickLikeBtn = async (post) => {
        const { _id, username, imgUrl } = this.props.loggedinUser
        this.props.likeClicked(post, { _id, username, imgUrl })
    }

    render() {
        const { posts, stories, loggedinUser } = this.props

        return (
            <section className='main-app'>
                <main>
                    <StoryList stories={stories}></StoryList>
                    <PostList posts={posts} onClickLikeBtn={this.onClickLikeBtn} userId={loggedinUser?._id}></PostList>
                </main>
                <SideBar user={loggedinUser}></SideBar>
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
    likeClicked,
    loadStories,
    loadLoggedinUser
}


export const MainApp = connect(mapStateToProps, mapDispatchToProps)(_MainApp)