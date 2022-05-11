import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadCurrnUser } from '../store/actions/userActions'

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
                    <div className='title'>{currUser.username} <button>Message</button> <button title='follow'><svg color="#262626" fill="#262626" height="15" role="img" viewBox="0 0 95.28 70.03" width="20"><path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0zm19-50.8A19 19 0 1164.32 0a19.05 19.05 0 0118.91 19.18zM14.76 50.01a5 5 0 01-3.37-1.31L.81 39.09a2.5 2.5 0 01-.16-3.52l3.39-3.7a2.49 2.49 0 013.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 013.52 0l3.53 3.58a2.49 2.49 0 010 3.52L18.23 48.57a5 5 0 01-3.47 1.44z"></path></svg></button></div>
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
