import React, {useState, useEffect, Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'

import { Intro } from '../component/home/Intro'


const Navbar = lazy(()=> import('../component/Navbar').then(mod => ({default: mod.Navbar})))
const Overlay = lazy(()=> import('../component/home/Overlay').then(mod => ({default: mod.Overlay})))
const About = lazy(()=> import('../component/home/About').then(mod => ({default: mod.About})))
const Projects = lazy(()=> import('../component/home/Projects').then(mod => ({default: mod.Projects})))
const Skills = lazy(()=> import('../component/home/Skills').then(mod => ({default: mod.Skills})))
const Contact = lazy(()=> import('../component/home/Contact').then(mod => ({default: mod.Contact})))

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
