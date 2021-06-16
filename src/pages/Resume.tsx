import React, {useState, useEffect} from 'react'
import { Navbar, Footer } from '../component/Component';



export const Resume: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | Resume"
    }, []);

    return (
        <>
            <Navbar highlight="resume" />
            <Footer highlight="resume" />
        </>
    )
}
