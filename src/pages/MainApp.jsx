import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar';
import { loadPosts } from '../store/actions/postActions';
import { loadLoggedinUser } from '../store/actions/userActions';

class _MainApp extends Component {
    componentDidMount() {
        this.props.loadPosts()
        this.props.loadLoggedinUser()
    }

    render() {
        const { posts, loggedinUser } = this.props

        return (
            <section className='main-app'>
                <PostList posts={posts}></PostList>
                <SideBar></SideBar>
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
    loadLoggedinUser
}


export const MainApp = connect(mapStateToProps, mapDispatchToProps)(_MainApp)