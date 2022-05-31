import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadCurrnUser, startFollow } from '../store/actions/userActions'
import { ReactComponent as UnfollowIcon } from '../assets/icons/unfollow-icon.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FollowBtn } from '../cmps/FollowBtn';
import { NoPost } from '../cmps/NoPost';


export const UserFeed = () => {
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    const { loggedinUser } = useSelector(state => state.userModule)

    useEffect(() => {
        dispatch(loadCurrnUser(params.userId))
        return () => {
            dispatch(loadCurrnUser(null))
        }
    }, [params.userId])



    useEffect(() => {
        console.log('i feel it');
        dispatch(loadCurrnUser(params.userId))
    
    }, [loggedinUser?.following.length])

   


    const follow = async (loggedinUser, userToFollow) => {
        dispatch(startFollow(loggedinUser, userToFollow))
    }

    const goToPost = (id) => {
        history.push(`/post/${id}`)
    }

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
                    <div className='title'>{currUser.username}

                        <button className='bold'>{(loggedinUser._id !== currUser._id) ? 'Message' : 'Edit Profile'}</button>
                        {
                            (loggedinUser._id !== currUser._id) ?
                                (currUser.followers.some(user => user._id === loggedinUser._id)
                                    ? <button onClick={() => follow(loggedinUser, currUser)} ><UnfollowIcon /></button>
                                    : <FollowBtn loggedinUser={loggedinUser} userToFollow={currUser} />)
                                : <></>
                        }

                    </div>
                    <div className="info">
                        <span ><span className='bold'>{posts?.length}</span> {posts?.length !== 1 ? 'posts' : 'post'}</span>
                        <span ><span className='bold'>{currUser.followers.length}</span> {currUser.followers.length > 1 ? 'followers' : 'follower'}</span>
                        <span><span className='bold'>{currUser.following.length}</span> following</span>
                    </div>
                </div>
            </header>
            {posts.length ?
                <main className='grid-container'>
                    {posts.map(post => {
                        return (
                    <div className='img-container pointer' key={post._id} onClick={() => goToPost(post._id)}>
                        <img src={post.imgUrl} alt="" />
                    </div>
                    )
                    })}
                </main>
                : <NoPost />
            }
        </section >
    )
}
