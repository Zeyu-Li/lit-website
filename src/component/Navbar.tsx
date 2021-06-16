import React, {useState, } from 'react'
import { HashLink } from 'react-router-hash-link'

import logo from './../images/logo.png'


export const Navbar: React.FC = () => {
    // TODO: hamburger

    return (
        <nav className="navbar">
            <HashLink to="/"><img src={logo} />Andrew's Portfolio</HashLink>
            <HashLink to="/">Home</HashLink>
            <HashLink to="/#projects">Projects</HashLink>
            <HashLink to="/#contact">Contact</HashLink>
            <HashLink to="/resume">Resume</HashLink>
            <a target="_blank" href="https://andrew-li-blog.vercel.app/">Blog</a>
        </nav>
    )
}
