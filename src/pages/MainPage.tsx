import React, {useState, useEffect } from 'react'
import { Navbar, Footer } from '../component/Component';


export const MainPage: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio"
    }, []);

    return (
        <>
            <Navbar />
            <Footer />
        </>
    )
}
