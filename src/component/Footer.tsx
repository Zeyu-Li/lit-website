import React from 'react'
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
                    <HashLink title="Home" to="/#" className={highlight === 'home' ? "highlightedNav": ""}>Home</HashLink>
                    <HashLink title="My Projects" to="/#projects" className={highlight === 'projects' ? "highlightedNav": ""}>Projects</HashLink>
                    <HashLink title="Contact Me" to="/#contact" className={highlight === 'contact' ? "highlightedNav": ""}>Contact</HashLink>
                    <br id="footerBreak" />
                    <HashLink title="View my resume" to="/resume" className={highlight === 'resume' ? "highlightedNav": ""}>Resume</HashLink>
                    <a title="View my blog" rel="noreferrer" target="_blank" href="https://andrew-li-blog.vercel.app/">Blog</a>
                </div>
            </footer>
        </>
    )
}
