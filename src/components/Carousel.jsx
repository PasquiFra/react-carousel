import './carouselStyle.scss'
import {
    SlArrowLeftCircle as PrevIcon,
    SlArrowRightCircle as NextIcon
} from "react-icons/sl";
import { useState, useEffect, useRef } from 'react'

const Carousel = ({ photos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplayStopped, setisAutoplayStopped] = useState(false);
    const intervalId = useRef(null)

    const changePic = (mode) => {
        clearInterval(intervalId.current)

        if (mode === "prev") {
            setisAutoplayStopped(false)
            currentIndex === 0 ?
                setCurrentIndex(photos.length - 1) : setCurrentIndex(currentIndex - 1);
        } else if (mode === "next") {
            setisAutoplayStopped(false)
            currentIndex === photos.length - 1 ?
                setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(mode)
            setisAutoplayStopped(true)
        }
    }

    useEffect(() => {
        console.log("useEffect 1", intervalId, intervalId.current)
        intervalId.current = setInterval(() => {
            changePic("next");
        }, 3000);
        if (isAutoplayStopped) {
            clearInterval(intervalId.current)
        }
        // Cleanup interval on unmount or dependency change
        return () => clearInterval(intervalId.current);
    }, [currentIndex]);

    return (
        <>
            <div id='mainCarousel'>
                <button onClick={() => changePic("prev")}>
                    <PrevIcon />
                </button>
                <picture className='text-center'>
                    <img src={photos[currentIndex].image} alt={`pic-${currentIndex}`} />
                    <div>{photos[currentIndex].text}</div>
                </picture>
                <button onClick={() => changePic("next")}>
                    <NextIcon />
                </button>
            </div>
            <div id='thumbnails'>
                {
                    photos.map((p, index) => {
                        return <img src={p.image}
                            alt={`photo-${index}`}
                            key={`photo-${index}`}
                            onClick={() => changePic(index)}
                        />
                    })
                }
            </div>
        </>
    )
}

export default Carousel