import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';
import { FollowBtn } from './FollowBtn';
import { UserPreview } from './UserPreview';


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
                                <UserPreview user={likedBy}></UserPreview>
                                <FollowBtn loggedinUser={loggedinUser} userToFollow={likedBy} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section >
    )
}
