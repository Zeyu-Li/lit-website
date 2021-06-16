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
        <>
            <Navbar />
            <PenguinCoin />
            <h1>Secret???</h1>
            <p>Good job, you get a Penguin Bottom Coin</p>
            <AiFillHome color="blue" /> <Link to="/"><a>Take me home</a></Link>
        </>
    )
}
