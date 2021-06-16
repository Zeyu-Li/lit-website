import React, {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Navbar, Footer, Intro, About, Projects, Skills, Contact } from '../component/Component';


export const MainPage: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio"
    }, [])

    const location = useLocation()
    const [currentItem, setCurrentItem] = useState('home')
    useEffect(() => {
        let current = location.hash.substring(1)
        // console.log(current)
        setCurrentItem(current.length == 0 ? 'home' : current)
    }, [location])


    return (
        <>
            <Navbar highlight={currentItem} />
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}
