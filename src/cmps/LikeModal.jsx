import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';
import { FollowBtn } from './FollowBtn';


export const LikeModal = ({ userList, loggedinUser, closeModal }) => {

    userList = userList.filter(user => user._id !== loggedinUser._id)

    return (
        <section className='like-modal'>
            <div className='modal'>
                <header className='bold'>
                    <div>Likes</div>
                    <span>
                        <CloseIcon className='pointer' onClick={closeModal} />
                    </span>
                </header>
                <ul>
                    {userList.map(likedBy => {

                        return (
                            <li key={likedBy._id}>
                                <div className='user-preview'>
                                    <img className='img-medium' src={likedBy.imgUrl} alt="" />
                                    <div>
                                        <p className='bold'>{likedBy.username}</p>
                                        <p>{likedBy.fullname}</p>
                                    </div>
                                </div>
                                <FollowBtn loggedinUser={loggedinUser} userToFollow={likedBy} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section >
    )
}
