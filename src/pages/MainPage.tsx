import React, {useState, useEffect } from 'react'
import { Navbar, Footer, Intro, About, Projects, Skills, Contact } from '../component/Component';


export const MainPage: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio"
    }, []);

    return (
        <>
            <Navbar />
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}
