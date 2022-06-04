import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg'
import { ReactComponent as MediaIcon } from '../../assets/icons/media-icon.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/back-icon.svg';
import { uploadImg } from '../../services/img-upload.service';
import { ImgEditor } from './ImgEditor';
import { useSelector } from 'react-redux';



export const AddPost = ({ closeModal }) => {
    const [image, setImage] = useState(null)
    const modalRef = useRef(null)
    const { loggedinUser } = useSelector(state => state.userModule)

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
                {image ? <header className='bold'>
                    <div><button onClick={() => setImage(null)}><BackIcon /></button> <h1 className='bold' >Corp</h1> <button className='bold'>Next</button></div>

                </header>
                    : <header className='bold'>
                        <div>Create new post</div>
                    </header>}
                <section className='content'>
                    {image ?
                        <section className='img-editor'>
                            <ImgEditor image={image} />
                            <div className="img-details">
                                <header>
                                    <div className='user-preview'>
                                        <img className='img-medium' src={loggedinUser.imgUrl} alt="" />
                                        <div>
                                            <p className='bold'>{loggedinUser.username}</p>
                                        </div>
                                    </div>
                                </header>
                                <textarea type='input' placeholder="Write your caption..." autoComplete="off" autoCorrect="off" name='txt'></textarea>
                                <input type="text" placeholder="addd location" />
                            </div>
                        </section>
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
