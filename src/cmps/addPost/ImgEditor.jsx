import React, { useEffect, useRef, useState } from 'react'

export const ImgEditor = ({ image }) => {
    const canvasRef = useRef(null)
    const [draggable, setDraggable] = useState(false)
    const [clickPos, setClickPos] = useState(null)
    const [imagePos, setImagePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        fillCanvas()
    }, [])

    const fillCanvas = (pos = { x: 0, y: 0 }) => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        const size = keepImgProportion(700, 700, image.width, image.height)
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
        console.log(pos);
        fillCanvas(pos)
    }

    const handleMouseDown = (e) => {
        console.log('imagePos', imagePos);
        setDraggable(true)
        setClickPos({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })
    }

    const handleMouseUp = (e) => {
        setDraggable(false)
        const x = clickPos.x - e.nativeEvent.offsetX
        const y = clickPos.y - e.nativeEvent.offsetY
        if (!x && !y) return
        setImagePos(prevImagePos => {
            return {
                x: prevImagePos.x - x,
                y: prevImagePos.y - y
            }

        })

    }

    return (
        <div className='canvas-container'>
            <canvas ref={canvasRef} width="700" height="700"
                onMouseDown={handleMouseDown}
                onMouseMove={handleDrag}
                onMouseUp={handleMouseUp} ></canvas>
        </div>
    )
}
