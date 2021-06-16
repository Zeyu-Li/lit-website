import React, {useState, useEffect} from 'react'
import { Navbar } from '../component/Component';



export const Resume: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | Resume"
    }, []);

    return (
        <>
            <Navbar />
        </>
    )
}
