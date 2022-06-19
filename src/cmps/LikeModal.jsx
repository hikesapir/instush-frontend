import React, { useEffect, useRef } from 'react'
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { FollowBtn } from './FollowBtn';
import { UserPreview } from './UserPreview';


export const LikeModal = ({ userList, loggedinUser, closeModal }) => {
    userList = userList.filter(user => user._id !== loggedinUser._id)
    const modalRef = useRef(null)

    useOnClickOutside(modalRef, () => closeModal())
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])

    return (
        <section className='like-modal'>
            <div className='modal' ref={modalRef}>
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
