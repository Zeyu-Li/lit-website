import React, {useState, useEffect, useRef} from 'react'
import {FiChevronsDown} from 'react-icons/fi'
import { HashLink } from 'react-router-hash-link'
import gsap from 'gsap'


export const Intro: React.FC = () => {
    const wave = useRef(null)
    const [loaded, setLoad] = useState(false)
    const [waveMe, setWaveMe] = useState(window.innerWidth > 1050)

    useEffect(()=> {
        setLoad(true)
        // wave animation
        if (waveMe) 
        gsap.timeline().fromTo(wave.current, {
            duration: 1,
            rotation: -30,
            opacity: 0
        }, {
            duration: 1,
            rotation: 20,
            opacity: 1,
        }).to(wave.current, {
            duration: 1,
            rotation: -5,
        }).to(wave.current, {
            duration: 0.5,
            rotation: 0,
        })
        const resizeListener = () => {
            setWaveMe(window.innerWidth > 1050)
        }
        
        // set resize listener
        window.addEventListener('resize', resizeListener)
    }, [waveMe])

    return (
        <div className="block singles introContainer">
            <div className="intro">
                {/* <PenguinCoin className="pageIcons" /> */}
                <div></div>
                <div className="pageText">
                    <span>
                    <div className={waveMe ? "inline" : ""}>
                        {waveMe ? <p ref={wave} style={{width: '70px'}}>👋</p> : ""}
                        {/* <p><span ref={wave}>👋</span></p> */}
                        <h1> Andrew Li</h1>
                    </div>
                    <div className={`divider ${loaded ? "dividerLoaded" : ""}`} />
                    <p className="singleText">Full Stack <wbr />and <wbr />Mobile Developer</p>
                    </span>
                </div>
            </div>
            <div className="scrollDown transition" style={{textAlign: 'center'}}><HashLink to="/#about" title="Go down"><FiChevronsDown size={64} color="#2EA2F8" /></HashLink></div>
        </div>
    )
}
