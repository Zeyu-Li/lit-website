import React, {useState, } from 'react'
import logo from './../images/logo.png'


export const Navbar: React.FC = () => {

    return (
        <nav>
            <a><img src={logo} />Andrew's Portfolio</a>
            <a>Home</a>
            <a>Projects</a>
            <a>Contact</a>
            <a>Resume</a>
            <a>Blog</a>
        </nav>
    )
}
