import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg'
import { ReactComponent as BackIcon } from '../../assets/icons/back-icon.svg';
import { ReactComponent as LocaIcon } from '../../assets/icons/location-icon.svg';
import { useForm } from '../../hooks/useForm';
import { uploadImg } from '../../services/img-upload.service';
import { addPost } from '../../store/actions/postActions';
import { UserPreview } from '../UserPreview';


export const ImgEditor = ({ image, setImage, closeModal }) => {
    const dispatch = useDispatch()
    const { loggedinUser } = useSelector(state => state.userModule)
    const [post, handleChange, setpost] = useForm({
        loca: '',
        txt: ''
    })

    const canvasRef = useRef(null)
    const [draggable, setDraggable] = useState(false)
    const [clickPos, setClickPos] = useState(null)
    const [imagePos, setImagePos] = useState({ x: 0, y: 0 })
    const [canvasSize, setCanvasSize] = useState(700)

    useEffect(() => {
        console.log(window.innerWidth);
        if (window.innerWidth < 1120 && window.innerWidth > 720) {
            setCanvasSize(window.innerWidth - 10 - 340)
            fillCanvas()
        } else if (window.innerWidth > 1120) {
            setCanvasSize(700)
            fillCanvas()
        }
        window.addEventListener('resize', () => {
            console.log('resize', (window.innerWidth * 0.628) - 340)
            if (window.innerWidth < 1120 && window.innerWidth > 720) {
                setCanvasSize(window.innerWidth - 10 - 340)
                fillCanvas()
            } else if (window.innerWidth > 1120) {
                setCanvasSize(700)
                fillCanvas()
            }
        })
    })

    useEffect(() => {
        const size = keepImgProportion(canvasSize, canvasSize, image.width, image.height)
        // console.log('size', size, 'imagePos', imagePos, 'canvasSize', canvasSize);
        if (imagePos.x > 0) setImagePos(prevImagePos => ({ x: 0, y: prevImagePos.y }))
        else if (imagePos.y > 0) setImagePos(prevImagePos => ({ x: prevImagePos.x, y: 0 }))
        else if (imagePos.x < canvasSize - size.width) setImagePos(prevImagePos => ({ x: canvasSize - size.width, y: prevImagePos.y }))
        else if (imagePos.y < canvasSize - size.height) setImagePos(prevImagePos => ({ x: prevImagePos.x, y: canvasSize - size.height }))
        fillCanvas()
    }, [imagePos])

    const fillCanvas = (pos = { x: 0, y: 0 }) => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        const size = keepImgProportion(canvasSize, canvasSize, image.width, image.height)
        const posX = imagePos.x - pos.x
        const posY = imagePos.y - pos.y
        context.drawImage(image, posX, posY, size.width, size.height)
    }

    const keepImgProportion = (maxWidth, maxHeight, imgWidth, imgHeight) => {
        const size = {}
        if (imgWidth < imgHeight) {
            const height = (maxWidth * imgHeight) / imgWidth;
            size.height = height;
            size.width = maxWidth;
            return size
        }
        const width = (maxHeight * imgWidth) / imgHeight;
        size.height = maxHeight;
        size.width = width;
        return size
    }

    const handleDrag = (e) => {
        if (!draggable) return
        var pos = {
            x: clickPos.x - e.nativeEvent.offsetX,
            y: clickPos.y - e.nativeEvent.offsetY
        }
        fillCanvas(pos)
    }

    const handleMouseDown = (e) => {
        setDraggable(true)
        setClickPos({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })
    }

    const handleMouseUp = (e) => {
        setDraggable(false)
        let x = clickPos.x - e.nativeEvent.offsetX
        let y = clickPos.y - e.nativeEvent.offsetY
        if (!x && !y) return
        setImagePos(prevImagePos => ({ x: prevImagePos.x - x, y: prevImagePos.y - y }))
    }

    const postImg = async () => {
        const canvas = canvasRef.current
        var imageData = await uploadImg(canvas.toDataURL('image/jpeg'));
        const newPost = {
            ...post,
            imgUrl: imageData.url,
            by: {
                _id: loggedinUser._id,
                username: loggedinUser.username,
                imgUrl: loggedinUser.imgUrl,
                fullname: loggedinUser.fullname
            }
        }
        console.log(newPost);
        dispatch(addPost(newPost))
        closeModal()
    }

    return (
        <section className='add-post'>
            <span className='close-icon pointer' onClick={closeModal}>
                <CloseIcon />
            </span>
            <div className='modal editor-modal'>
                <header className='bold'>
                    <div className='modal-title flex'>
                        <button onClick={() => setImage(null)}>
                            <BackIcon />
                        </button>
                        <h1 className='bold' >Corp</h1>
                        <button className='bold' onClick={postImg}>Next</button>
                    </div>
                </header>
                <section className='content'>
                    <section className='img-editor'>
                        <div className='canvas-container'>
                            <canvas ref={canvasRef} width={canvasSize} height={canvasSize}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleDrag}
                                onMouseUp={handleMouseUp} ></canvas>
                        </div>
                        <div className="img-details">
                            <header>
                                <UserPreview user={loggedinUser}></UserPreview>
                            </header>
                            <textarea type='input' placeholder="Write your caption..." autoComplete="off" autoCorrect="off" name='txt' value={post.txt} onChange={handleChange}></textarea>
                            <label >
                                <input type="text" placeholder="Add location" value={post.loca} onChange={handleChange} name='loca' />
                                <LocaIcon />
                            </label>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}
