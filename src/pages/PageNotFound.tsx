import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'


export const PageNotFound: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | 404"
    }, []);

    return (
        <>
            <h1>Error 404</h1>
            <p>This page must’ve been stolen by a pirate :{'('}</p>
            <AiFillHome color="blue" /> <Link to="/"><a>Take me home</a></Link>
        </>
    )
}
