import React, {useState, } from 'react'
import { HashLink } from 'react-router-hash-link'

import logo from './../images/logo.png'


interface Prop {
    highlight?: string
}

export const Navbar: React.FC<Prop> = ({highlight = ''}) => {
    // TODO: hamburger

    return (
        <div>
        <nav className="navbar">
            <HashLink to="/" title="Home"><img src={logo} className="navIcon" />Andrew's Portfolio</HashLink>
            <div className="navItems">
                <HashLink title="Home" to="/" className={highlight === 'home' ? "highlightedNav": ""}>Home</HashLink>
                <HashLink title="My Projects" to="/#projects" className={highlight === 'projects' ? "highlightedNav": ""}>Projects</HashLink>
                <HashLink title="Contact Me" to="/#contact" className={highlight === 'contact' ? "highlightedNav": ""}>Contact</HashLink>
                <HashLink title="View my resume" to="/resume" className={highlight === 'resume' ? "highlightedNav": ""}>Resume</HashLink>
                <a title="View my blog" target="_blank" href="https://andrew-li-blog.vercel.app/">Blog</a>
            </div>
            <div className="hamburger">
            </div>
        </nav>
        </div>
    )
}
