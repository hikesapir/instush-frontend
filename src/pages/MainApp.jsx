import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar';
import { loadPosts } from '../store/actions/postActions';

class _MainApp extends Component {
    componentDidMount() {
        console.log(this.state);
        this.props.loadPosts()
    }

    render() {
        const { posts } = this.props
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
        posts: state.posts
    }
}
const mapDispatchToProps = {
    loadPosts
}


export const MainApp = connect(mapStateToProps, mapDispatchToProps)(_MainApp)