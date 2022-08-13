import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startFollow } from '../store/actions/userActions'

export const FollowBtn = ({ loggedinUser, userToFollow }) => {
    const dispatch = useDispatch()
    const follow = async (miniUser) => {
        dispatch(startFollow(miniUser))
    }
    const [miniUser, setMiniUser] = useState({
        _id: userToFollow._id,
        fullname: userToFollow.fullname,
        imgUrl: userToFollow.imgUrl,
        username: userToFollow.username
    })
    useEffect(() => {
        setMiniUser ({
            _id: userToFollow._id,
            fullname: userToFollow.fullname,
            imgUrl: userToFollow.imgUrl,
            username: userToFollow.username
        }) 
    }, [userToFollow])

    return loggedinUser.following.some(user => user._id === userToFollow._id)
        ? (<button onClick={() => follow(miniUser)} className='bold'>Unfollow</button>)
        : (<button onClick={() => follow(miniUser)} className='btn-primary bold'>Follow</button>)
}
