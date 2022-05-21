import React from 'react'
import { useDispatch } from 'react-redux'
import { startFollow } from '../store/actions/userActions'

export const FollowBtn = ({ loggedinUser, userToFollow }) => {
    const dispatch = useDispatch()
    const follow = async (loggedinUser, userToFollow) => {
        dispatch(startFollow(loggedinUser, userToFollow))
    }

    return loggedinUser.following.some(user => user._id === userToFollow._id)
        ? (<button onClick={() => follow(loggedinUser, userToFollow)} className='bold'>Unfollow</button>)
        : (<button onClick={() => follow(loggedinUser, userToFollow)} className='btn-primary bold'>Follow</button>)
}
