import React, {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'

import {Model} from './Model'
import { useEffect } from 'react'


export const Overlay: React.FC = React.memo(() => {
    const [blueSide, setBlueSide] = useState(window.innerWidth > 700)
    const [top, setTop] = useState(window.scrollY < window.innerHeight)
    const [smallSize, setSmallSize] = useState(window.innerWidth < 1050)
    const [offset, setOffset] = useState(0)
    const [small, setSmall] = useState(window.innerWidth > 1050 ? 1: .5)
    const [screenScale, setScreenScale] = useState(window.innerWidth > 1050 ? 1: .5)
    useEffect(()=> {
        window.onscroll = () => {
            // if scrolled passed the middle of the transition from first to second
            if (window.scrollY < window.innerHeight) {
                if (1-(window.scrollY/window.innerHeight) < .5) {
                    setTop(false)
                    if (smallSize) {
                        setSmall(1.4*.5 * screenScale)
                    } else {
                        setSmall(.5 * screenScale)
                    }
                } else {
                    setTop(true)
                    if (smallSize) {
                        setSmall(1.4*screenScale * (1-(window.scrollY/window.innerHeight)))
                    } else {
                        setSmall(screenScale * (1-(window.scrollY/window.innerHeight)))
                    }
                }
            } else {
                setTop(false)
                setSmall(.5 * screenScale)
            }
            setOffset(window.scrollY)
        }

        const handleResize = () => {
            if (window.innerWidth > 1050) {
                setBlueSide(true)
                setScreenScale(1)
                setSmall(1)
                setSmallSize(false)
            } else {
                setBlueSide(false)
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
        <div className={`model ${smallSize && top ? "extraMargin" : "" }`}>
            <Canvas>
                <Suspense fallback={null}>
                    <Model scroll={offset} small={small} />
                </Suspense>
                <ambientLight intensity={1} />
            </Canvas>
            {blueSide ? <div className="blueSide"></div> : null}
        </div>
    )
})
