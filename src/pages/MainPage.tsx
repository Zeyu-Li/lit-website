import React, {useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Navbar, Intro, About, Projects, Skills, Contact, Overlay } from '../component/Component';


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
        setCurrentItem(current.length === 0 ? 'home' : current)
    }, [location])


    return (
        <div id="top">
            <Overlay />
            <Navbar highlight={currentItem} />
            <Intro />
            <div className="mainPage">
                <About />
                <Projects />
                <Skills />
            </div>
            <Contact highlight={currentItem} />
        </div>
    )
}
