import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const UserPreview = ({user}) => {
    const history = useHistory()

    const goToProfile = (userId) => {
        history.push(`/feed/${userId}`)
    }

    return (
        <div className='user-preview'>
            <img onClick={() => goToProfile(user._id)} className='img-medium pointer' src={user.imgUrl} alt="user-img" />
            <div>
                <p className='bold'>{user.username}</p>
                <p>{user.fullname}</p>
            </div>
        </div>
    )
}
