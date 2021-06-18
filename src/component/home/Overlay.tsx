import React, {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'

import Model from './Model'
import { useEffect } from 'react'


export const Overlay: React.FC = () => {
    const [top, setTop] = useState(window.scrollY < window.innerHeight)
    const [smallSize, setSmallSize] = useState(window.innerWidth < 1050)
    const [offset, setOffset] = useState(0)
    const [small, setSmall] = useState(window.innerWidth > 1050 ? 1: .5)
    const [screenScale, setScreenScale] = useState(window.innerWidth > 1050 ? 1: .5)
    useEffect(()=> {
        window.onscroll = () => {
            // if scrolled passed the middle of the transition from first to second
            if (window.scrollY < window.innerHeight) {
                setTop(true)
                if (1-(window.scrollY/window.innerHeight) < .5) {
                    if (smallSize) {
                        setSmall(1.4*.5 * screenScale)
                    } else {
                        setSmall(.5 * screenScale)
                    }
                } else {
                    setTop(false)
                    if (smallSize) {
                        setSmall(1.4*screenScale * (1-(window.scrollY/window.innerHeight)))
                    } else {
                        setSmall(screenScale * (1-(window.scrollY/window.innerHeight)))
                    }
                }
            } else {
                setSmall(.5 * screenScale)
            }
            setOffset(window.scrollY)
        }

        const handleResize = () => {
            if (window.innerWidth > 1050) {
                setScreenScale(1)
                setSmall(1)
                setSmallSize(false)
            } else {
                // 1-(1070-window.innerWidth)/1070
                setScreenScale(.5)
                setSmall(.5)
                setSmallSize(true)
            }
        }

        window.addEventListener('resize', handleResize)
        // init on mount
        handleResize()
    }, [screenScale, smallSize])

    return (
        <div className={`model ${smallSize && top ? "" : "extraMargin" }`}>
            <Canvas>
                <Suspense fallback={null}>
                    <Model scroll={offset} small={small} />
                </Suspense>
                <ambientLight intensity={1} />
            </Canvas>
            <div className="blueSide"></div>
        </div>
    )
}
