import React from 'react'
import { ReactComponent as CameraIcon } from '../assets/icons/camera-icon.svg';


export const NoPost = () => {
    return (
        <section className='no-posts'>
            <span>
                <CameraIcon />
            </span>
            <span>No Posts Yet</span>
        </section>
    )
}
