import React, { useEffect, useRef, useState } from 'react'

export const ImgEditor = ({ image }) => {
    const canvasRef = useRef(null)
    const [draggable, setDraggable] = useState(false)
    const [clickPos, setClickPos] = useState(null)

    useEffect(() => {
        fillCanvas()
    }, [])

    const fillCanvas = (pos = { x: 0, y: 0 }) => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const size = keepImgProportion(700, 700, image.width, image.height)
        context.drawImage(image, -1, -300, size.width, size.height)
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
    }

    const handleMouseDown = (e) => {
        setDraggable(true)
        setClickPos({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })
    }

    return (
        <div className='canvas-container'>
            <canvas ref={canvasRef} width="700" height="700"
                onMouseDown={handleMouseDown}
                onMouseMove={handleDrag}
                onMouseUp={() => setDraggable(false)} ></canvas>
        </div>
    )
}
