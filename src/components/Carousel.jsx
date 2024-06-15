import './carouselStyle.scss'
import {
    SlArrowLeftCircle as PrevIcon,
    SlArrowRightCircle as NextIcon
} from "react-icons/sl";
import { useState } from 'react'


const Carousel = ({ photos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const changePic = (mode) => {
        if (mode === "prev") {
            currentIndex === 0 ?
                setCurrentIndex(photos.length - 1) : setCurrentIndex(currentIndex - 1)
        } else if (mode === "next") {
            currentIndex === photos.length - 1 ?
                setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(mode)
        }
    }
    // const autoPlay = setInterval(() => {
    //     changePic("next")
    // }, 3000)

    return (
        <>
            <div id='mainCarousel'>
                <button onClick={() => changePic("prev")}>
                    <PrevIcon />
                </button>
                <img src={photos[currentIndex].image} alt={`pic-${currentIndex}`} />
                <button onClick={() => changePic("next")}>
                    <NextIcon />
                </button>
            </div>
            <div id='thumbnails'>
                {
                    photos.map((p, index) => {
                        return <img src={p.image} alt={`photo-${p.index}`} key={`photo-${p.index}`} onClick={() => changePic(index)} />
                    })
                }
            </div>
        </>
    )
}

export default Carousel