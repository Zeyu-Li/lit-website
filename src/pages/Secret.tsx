import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

import { ReactComponent as PenguinCoin } from '../images/coin.svg'
import { Navbar } from '../component/Component';


export const Secret: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | 😳"
    }, []);

    return (
        <div className="block singles">
            <Navbar />
            <div className="singleBody">
                <PenguinCoin className="pageIcons" />
                <h1>Secret???</h1>
                <p className="singleText">Good job, you got a <wbr />Penguin Bottom Coin</p>
                <Link to="/"><span className="homeIcon"><AiFillHome color="#2EA2F8" size={70}  /></span>
                Take me home</Link>
            </div>
        </div>
    )
}
