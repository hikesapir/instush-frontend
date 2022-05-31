import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';
import { ReactComponent as MediaIcon } from '../assets/icons/media-icon.svg';
import { uploadImg } from '../services/img-upload.service';


export const AddPost = ({ closeModal }) => {
    // const [image, setImage] = useState(null)
    // const [isImageLoaded, setIsImageLoaded] = useState(false)
    const canvasRef = useRef(null)
    var isImageLoaded = false
    useEffect(() => {
        const canvas = canvasRef.current
        // canvas.style.display = isImageLoaded ? 'block' : 'none'
        console.log('every');
        // if (canvas) {
        //     const context = canvas.getContext('2d')
        //     //Our first draw
        //     context.fillStyle = '#0095f6'
        //     context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        //     context.drawImage(image, 0, 0, canvasRef.width, canvasRef.height)
        // }

    }, [isImageLoaded])

    const fillCanvas = (image) => {
        isImageLoaded = true
        console.log(isImageLoaded);
        // setIsImageLoaded(true)
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }

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
            img.onload = fillCanvas.bind(null, img)
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
            <div className='modal'>
                <header className='bold'>
                    <div>Create new post</div>
                </header>
                {isImageLoaded ? <div >
                    <canvas ref={canvasRef} width="400" height="400" ></canvas>
                </div> : <></>}
                {/* <div >
                    <canvas ref={canvasRef} width="300" height="300" ></canvas>
                </div> */}
                <main onDragOver={preventDefault}
                    onDrop={handleFile} >
                    <MediaIcon></MediaIcon>
                    <p>Drag photos and videos here</p>
                    <label className='button btn-primary'
                        htmlFor="post"
                    >Select from computer</label>
                    <input type="file" id='post' accept="image/*" onChange={handleFile} />
                </main>

            </div>
        </section>
    )
}
