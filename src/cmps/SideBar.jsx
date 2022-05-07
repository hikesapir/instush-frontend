import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export function SideBar({ user }) {
    const history = useHistory()
    const goTOProfile = () => {
        history.push(`/feed/${user._id}`)
    }
    if (!user) return <div>Loading...</div>

    return (
        <section className='side-bar'>
            <header>
                <img className='pointer' onClick={goTOProfile} src={user.imgUrl} alt="" />
                <span>{user.username}</span>
            </header>
            <h1>Suggestions For You</h1>
            <img src="https://res.cloudinary.com/mistertoysss/image/upload/v1648414113/funday%20must/photo-1568602471122-7832951cc4c5_fbs2vc.jpg" alt="" />
            <img src="https://res.cloudinary.com/mistertoysss/image/upload/v1648414292/funday%20must/photo-1551836022-deb4988cc6c0_t4if9h.jpg" alt="" />
            <img src="https://res.cloudinary.com/mistertoysss/image/upload/v1648414297/funday%20must/photo-1472099645785-5658abf4ff4e_lhdb3o.jpg" alt="" />
        </section>
    )
}
