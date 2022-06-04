import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg'
import { ReactComponent as MediaIcon } from '../../assets/icons/media-icon.svg';
import { uploadImg } from '../../services/img-upload.service';
import { ImgEditor } from './ImgEditor';



export const AddPost = ({ closeModal }) => {
    const [image, setImage] = useState(null)
    const modalRef = useRef(null)

    // useEffect(() => {
    //     console.log(modalRef.current.style.width);

    // }, [modalRef])

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
        // await uploadImg(file.toDataURL('image/jpeg'));
    }

    const preventDefault = (event) => {
        event.preventDefault();
    }

    return (
        <section className='add-post'>
            <span className='close-icon pointer' onClick={closeModal}>
                <CloseIcon />
            </span>
            <div className='modal' ref={modalRef}>
                <header className='bold'>
                    <div>Create new post</div>
                </header>
                <section className='content'>
                    {image ?
                        <ImgEditor image={image} />
                        : <main onDragOver={preventDefault}
                            onDrop={handleFile} >
                            <MediaIcon></MediaIcon>
                            <p>Drag photos and videos here</p>
                            <label className='button btn-primary'
                                htmlFor="post"
                            >Select from computer</label>
                            <input type="file" id='post' accept="image/*" onChange={handleFile} />
                        </main>
                    }
                </section>
            </div>
        </section>
    )
}
