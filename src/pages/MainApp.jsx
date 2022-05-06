import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar';
import { loadPosts, likeClicked } from '../store/actions/postActions';
import { loadLoggedinUser } from '../store/actions/userActions';

class _MainApp extends Component {
    componentDidMount() {
        this.props.loadPosts()
        this.props.loadLoggedinUser()
    }

    onClickLikeBtn = async (post) => {
        const { _id, username, imgUrl } = this.props.loggedinUser
        this.props.likeClicked(post, { _id, username, imgUrl })
    }

    render() {
        const { posts, loggedinUser } = this.props

        return (
            <section className='main-app'>
                <PostList posts={posts} onClickLikeBtn={this.onClickLikeBtn} userId={loggedinUser?._id}></PostList>
                <SideBar user={loggedinUser}></SideBar>
            </section >
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postModule.posts,
        loggedinUser: state.userModule.loggedinUser

    }
}
const mapDispatchToProps = {
    loadPosts,
    likeClicked,
    loadLoggedinUser
}


export const MainApp = connect(mapStateToProps, mapDispatchToProps)(_MainApp)