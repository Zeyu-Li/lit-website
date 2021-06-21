import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import gsap from 'gsap'

import { ReactComponent as PenguinCoin } from '../images/coin.svg'
import { Navbar } from '../component/Navbar'


export const Secret: React.FC = React.memo(() => {
    const [rolls, setRolls] = useState(0)
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | 😳"
        // animation (fade in)
        gsap.from('.header1', 1,  {
            autoAlpha: 0,
            rotationX: 80,
            transformOrigin: '50% 50% -40px',
            ease: 'power3.easeOut',
        })
    }, [])

    const troll = () => {
        // we do a little trolling :p (but not too much lol)
        window.open("https://github.com/Zeyu-Li/bottom-penguin", "_blank")
    }

    const clickedCoin = () => {
        if (rolls === 1) {
            setRolls(0)
            troll()
        } else {
            setRolls(rolls+1)
        }
    }

    return (
        <div className="block singles">
            <Navbar />
            <div className="singleBody singleBodyCoin">
                <PenguinCoin className={`pageIcons ${rolls !== 0 ? "rollCoin": null}`} title="Free PBC???" onClick={clickedCoin} style={{cursor: "pointer"}} />
                <div className="pageText">
                    <h1 className="header1">Secret???</h1>
                    <p className="singleText">Good job! You got a <wbr />Penguin Bottom Coin</p>
                    <Link to="/" title="Go Home"><span className="homeIcon"><AiFillHome color="#2EA2F8" size={70}  /></span>
                    Take me home</Link>
                </div>
            </div>
        </div>
    )
})
