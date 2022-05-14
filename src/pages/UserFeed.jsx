import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadCurrnUser } from '../store/actions/userActions'
import { ReactComponent as UnfollowIcon } from '../assets/icons/unfollow-icon.svg';


export const UserFeed = () => {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCurrnUser(params.userId))
        return () => {
            dispatch(loadCurrnUser(null))
        }
    }, [params.userId])

    const { currUser } = useSelector(state => state.userModule)
    var posts = useSelector(state => state.postModule.posts)
    if (!currUser) return <div>Loading...</div>
    // if (!currUser || !posts) return <div>Loading...</div>
    posts = posts.filter(post => post.by._id === currUser._id)

    return (
        <section className='user-feed main-layout'>
            <header>
                <img src={currUser.imgUrl} alt="" />
                <div >
                    <div className='title'>{currUser.username} <button>Message</button> <button title='follow'><UnfollowIcon /></button></div>
                    <div className="info">
                        <span ><span className='bold'>{posts?.length}</span> {posts?.length !== 1 ? 'posts' : 'post'}</span>
                        <span ><span className='bold'>{currUser.followers.length}</span> {currUser.followers.length > 1 ? 'followers' : 'follower'}</span>
                        <span><span className='bold'>{currUser.following.length}</span> following</span>
                    </div>
                </div>
            </header>
            <main className='grid-container'>
                {posts?.map(post => {
                    return (
                        <div className='img-container' key={post._id}>
                            <img src={post.imgUrl} alt="" />
                        </div>
                    )
                })}
            </main>
        </section>
    )
}
