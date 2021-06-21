import React, {useState, useEffect, Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'

import { Intro } from '../component/Component'


const Navbar = lazy(()=> import('../component/Component').then(mod => ({default: mod.Navbar})))
const Overlay = lazy(()=> import('../component/Component').then(mod => ({default: mod.Overlay})))
const About = lazy(()=> import('../component/Component').then(mod => ({default: mod.About})))
const Projects = lazy(()=> import('../component/Component').then(mod => ({default: mod.Projects})))
const Skills = lazy(()=> import('../component/Component').then(mod => ({default: mod.Skills})))
const Contact = lazy(()=> import('../component/Component').then(mod => ({default: mod.Contact})))

export const MainPage: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio"
    }, [])

    const location = useLocation()
    const [currentItem, setCurrentItem] = useState('home')
    useEffect(() => {
        const current = location.hash.substring(1)
        // console.log(current)
        setCurrentItem(current.length === 0 ? 'home' : current)
    }, [location])


    return (
        <div id="top">
            <Suspense fallback={<div />}>
                <Overlay />
            </Suspense>
            <Suspense fallback={<div />}>
                <Navbar highlight={currentItem} />
            </Suspense>
            <Intro />
            <Suspense fallback={<div />}>
                <div className="mainPage">
                    <About />
                    <Projects />
                    <Skills />
                </div>
            </Suspense>
            <Suspense fallback={<div />}>
                <Contact highlight={currentItem} />
            </Suspense>
        </div>
    )
}
