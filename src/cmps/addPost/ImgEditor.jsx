import React, { useEffect, useRef, useState } from 'react'

export const ImgEditor = ({ image }) => {
    const canvasRef = useRef(null)
    const [draggable, setDraggable] = useState(false)
    const [clickPos, setClickPos] = useState(null)
    const [imagePos, setImagePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const size = keepImgProportion(700, 700, image.width, image.height)
        if (imagePos.x > 0) setImagePos(prevImagePos => ({ x: 0, y: prevImagePos.y }))
        else if (imagePos.y > 0) setImagePos(prevImagePos => ({ x: prevImagePos.x, y: 0 }))
        else if (imagePos.x < 700 - size.width) setImagePos(prevImagePos => ({ x: 700 - size.width, y: prevImagePos.y }))
        else if (imagePos.y < 700 - size.height) setImagePos(prevImagePos => ({ x: prevImagePos.x, y: 700 - size.height }))
        fillCanvas()
    }, [imagePos])

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

    return (
        <div className='canvas-container'>
            <canvas ref={canvasRef} width="700" height="700"
                onMouseDown={handleMouseDown}
                onMouseMove={handleDrag}
                onMouseUp={handleMouseUp} ></canvas>
        </div>
    )
}
