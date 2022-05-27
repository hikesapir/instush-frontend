import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';
import { ReactComponent as MediaIcon } from '../assets/icons/media-icon.svg';

export const AddPost = ({closeModal}) => {
    return (
        <section className='add-post'>
            <span className='close-icon pointer' onClick={closeModal}>
                <CloseIcon  />
            </span>
            <div className='modal'>
                <header className='bold'>
                    <div>Create new post</div>
                </header>
                <main>
                    <MediaIcon></MediaIcon>
                    <p>Drag photos and videos here</p>
                    <label className='button btn-primary' htmlFor="post">Select from computer</label>
                    <input type="file" id='post' accept="image/* video/*"/>
                </main>
            </div>
        </section>
    )
}
