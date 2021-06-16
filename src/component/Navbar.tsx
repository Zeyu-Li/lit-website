import React, {useState, } from 'react'
import { HashLink } from 'react-router-hash-link'

import logo from './../images/logo.png'


interface Prop {
    highlight?: string
}

export const Navbar: React.FC<Prop> = ({highlight = ''}) => {
    // TODO: hamburger

    return (
        <div style={{width: "100%"}}>
        <nav className="navbar">
            <HashLink to="/"><img src={logo} className="navIcon" />Andrew's Portfolio</HashLink>
            <div className="navItems">
                <HashLink to="/" className={highlight === 'home' ? "highlightedNav": ""}>Home</HashLink>
                <HashLink to="/#projects" className={highlight === 'projects' ? "highlightedNav": ""}>Projects</HashLink>
                <HashLink to="/#contact" className={highlight === 'contact' ? "highlightedNav": ""}>Contact</HashLink>
                <HashLink to="/resume" className={highlight === 'resume' ? "highlightedNav": ""}>Resume</HashLink>
                <a target="_blank" href="https://andrew-li-blog.vercel.app/">Blog</a>
            </div>
            <div className="hamburger">
            </div>
        </nav>
        </div>
    )
}
