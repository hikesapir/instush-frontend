import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg'
import { ReactComponent as MediaIcon } from '../../assets/icons/media-icon.svg';
import { ImgEditor } from './ImgEditor';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { utilService } from '../../services/util-service.js'



export const AddPost = ({ closeModal }) => {
    const [image, setImage] = useState(null)
    const modalRef = useRef(null)

    useOnClickOutside(modalRef, () => closeModal())
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';

        }
    }, [])


    const handleFile = async (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        let file;
        if (ev.type === 'change') file = ev.target.files[0];
        else if (ev.type === 'drop') file = ev.dataTransfer.files[0];

        var reader = new FileReader()
        reader.onload = function (event) {
            console.log('onload');
            const img = new Image()
            // Render on canvas
            img.onload = () => setImage(img)
            img.onerror = function () { alert("image load failed") };
            img.src = event.target.result
        }
        reader.readAsDataURL(file)
    }

    const preventDefault = (event) => {
        event.preventDefault();
    }
    const isMobile = utilService.isMobile()

    return (
        (image ? <ImgEditor image={image} setImage={setImage} closeModal={closeModal} />
            : <section className='add-post'>
                <span className='close-icon pointer' onClick={closeModal}>
                    <CloseIcon />
                </span>
                <div className='modal' ref={modalRef}>
                    <header className='bold'>
                        <div className='modal-title'>Create new post</div>
                    </header>
                    <section className='content'>
                        <main onDragOver={preventDefault}
                            onDrop={handleFile} >
                            <MediaIcon></MediaIcon>
                            {!isMobile && <p>Drag photos and videos here</p>}
                            <label className='button btn-primary'
                                htmlFor="post"
                            >Select from {isMobile ? 'gallery' : 'computer'}</label>
                            <input type="file" id='post' accept="image/*" onChange={handleFile} />
                        </main>
                    </section>
                </div>
            </section>)
    )
}
