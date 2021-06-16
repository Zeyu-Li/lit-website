import React, {useState, } from 'react'
import { HashLink } from 'react-router-hash-link'


interface Prop {
    highlight?: string
}

export const Footer: React.FC<Prop> = ({highlight = ''}) => {

    return (
        <>
            <footer>
                <p className="copyrightText">© 2021 Andrew Li. All Rights Reserved.</p>
                <div className="breakLine" />
                <div className="navFooterItems">
                    <HashLink to="/" className={highlight === 'home' ? "highlightedNav": ""}>Home</HashLink>
                    <HashLink to="/#projects" className={highlight === 'projects' ? "highlightedNav": ""}>Projects</HashLink>
                    <HashLink to="/#contact" className={highlight === 'contact' ? "highlightedNav": ""}>Contact</HashLink>
                    <br id="footerBreak" />
                    <HashLink to="/resume" className={highlight === 'resume' ? "highlightedNav": ""}>Resume</HashLink>
                    <a target="_blank" href="https://andrew-li-blog.vercel.app/">Blog</a>
                </div>
            </footer>
        </>
    )
}
