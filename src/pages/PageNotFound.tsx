import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

import { ReactComponent as PiratePenguin } from '../images/pirate.svg'
import { Navbar } from '../component/Component';

export const PageNotFound: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | 404"
    }, []);

    return (
        <div className="block">
            <Navbar />
            <PiratePenguin />
            <h1>Error 404</h1>
            <p>This page must’ve been stolen by a pirate :{'('}</p>
            <AiFillHome color="blue" /> <Link to="/">Take me home</Link>
        </div>
    )
}
