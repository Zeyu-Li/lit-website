import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

import { ReactComponent as PenguinCoin } from '../images/coin.svg'
import { Navbar } from '../component/Component';


export const Secret: React.FC = () => {
    const [rolls, setRolls] = useState(0)
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | 😳"
    }, [])

    const troll = () => {
        // we do a little trolling :p
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }

    const clickedCoin = () => {
        if (rolls == 1) {
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
                    <h1>Secret???</h1>
                    <p className="singleText">Good job! You got a <wbr />Penguin Bottom Coin</p>
                    <Link to="/" title="Go Home"><span className="homeIcon"><AiFillHome color="#2EA2F8" size={70}  /></span>
                    Take me home</Link>
                </div>
            </div>
        </div>
    )
}
