import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { ReactComponent as HomeIcon } from '../assets/icons/home-icon.svg';
import { ReactComponent as DirectIcon } from '../assets/icons/paper-plane-icon.svg';
import { ReactComponent as NewPostIcon } from '../assets/icons/new-post-icon.svg';
import { ReactComponent as CompassIcon } from '../assets/icons/compass-icon.svg';

import { ReactComponent as LikeIcon } from '../assets/icons/like-icon.svg';
import { AddPost } from './addPost/AddPost';
import { AppFilter } from './AppFilter';


export function AppHeader() {
    const { loggedinUser } = useSelector(state => state.userModule)
    const history = useHistory()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const goHome = () => {
        history.push(`/`)
    }
    const goTOProfile = () => {
        history.push(`/feed/${loggedinUser._id}`)
    }

    const openModal = async () => {
        setIsModalOpen(prevIsModalOpen => !prevIsModalOpen)
    }

    if (!loggedinUser) return <div>Loading...</div>

    return (
        <section className='app-header'>
            <header className='header-content'>
                <span className='logo pointer' onClick={goHome}>Instush</span>
                <AppFilter></AppFilter>
                <div className='route'>
                    <span className='pointer' onClick={goHome}><HomeIcon /></span>
                    <span><DirectIcon /></span>
                    <span className='pointer' onClick={openModal}><NewPostIcon /></span>
                    <span><CompassIcon /></span>
                    <span><LikeIcon /></span>
                    <span className='img pointer' onClick={goTOProfile}><img src={loggedinUser.imgUrl} alt="" /></span>
                </div>
            </header>
            {isModalOpen ? <AddPost closeModal={openModal} /> : <></>}


        </section>
    )
}
