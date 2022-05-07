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
    if (!currUser || !posts) return <div>Loading...</div>
    posts = posts.filter(post => post.by._id === currUser._id)

    return (
        <div>UserFeed
            <img src={currUser.imgUrl} alt="" />
            <span>{currUser.followers.length} followers</span>
            <span>{currUser.following.length} following</span>
            <main>
                {posts.map(post => {
                    return (
                        <img src={post.imgUrl} alt="" key={post._id} />
                    )
                })}
            </main>
        </div>
    )
}
