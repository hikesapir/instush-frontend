import React, { useState } from 'react'
import { ReactComponent as HomeIcon } from '../assets/icons/home-icon.svg';
import { ReactComponent as NewPostIcon } from '../assets/icons/new-post-icon.svg';
import { ReactComponent as CompassIcon } from '../assets/icons/compass-icon.svg';
import { ReactComponent as LikeIcon } from '../assets/icons/like-icon.svg';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AddPost } from './addPost/AddPost';


export const MobileActions = () => {

  const history = useHistory()
  const { loggedinUser } = useSelector(state => state.userModule)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = async () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen)
  }

  const goHome = () => {
    history.push(`/feed`)
  }
  const goTOProfile = () => {
    history.push(`/feed/${loggedinUser._id}`)
  }
  if (!loggedinUser) return
  return (
    <section className='mobile-actions flex'>
      <span className='pointer' onClick={goHome}><HomeIcon /></span>
      <span><CompassIcon /></span>
      <span className='pointer' onClick={openModal}><NewPostIcon /></span>
      <span><LikeIcon /></span>
      <span className='img pointer' onClick={goTOProfile}><img src={loggedinUser.imgUrl} alt="" /></span>
      {isModalOpen ? <AddPost closeModal={openModal} /> : <></>}
    </section>
  )
}
