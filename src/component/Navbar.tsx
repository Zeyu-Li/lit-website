import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { HiMenu } from 'react-icons/hi'


interface Prop {
    highlight?: string
}

export const Navbar: React.FC<Prop> = React.memo(({highlight = ''}) => {
    const [hamburger, setHamburger] = useState(false)
    // hamburger
    const clickedHamburger = () => {
        setHamburger(!hamburger)
    }

    return (
        <div>
        <nav className="navbar">
            <HashLink to="/#" title="Home"><img alt="website logo" src={'logo.png'} className="navIcon" />Andrew's Portfolio</HashLink>
            <div className="navItems">
                <HashLink title="Home" to="/#" className={highlight === 'home' ? "highlightedNav": ""}>Home</HashLink>
                <HashLink title="My Projects" to="/#projects" className={highlight === 'projects' ? "highlightedNav": ""}>Projects</HashLink>
                <HashLink title="Contact Me" to="/#contact" className={highlight === 'contact' ? "highlightedNav": ""}>Contact</HashLink>
                <HashLink title="View my resume" to="/resume" className={highlight === 'resume' ? "highlightedNav": ""}>Resume</HashLink>
                <a title="View my blog" rel="noreferrer" target="_blank" href="https://blog.andrewli.site/">Blog</a>
            </div>
            <div className="hamburger">
                <HiMenu color="#73CDF3" size={30} title="Open Navigation Menu" onClick={clickedHamburger} />
            </div>
        </nav>
        <div onClick={()=>setHamburger(false)} className={`fullPageNav ${hamburger ? "hamburgerActive" : ""}`}>
            <div className="navLinks">
                <HashLink title="Home" to="/#" className={highlight === 'home' ? "highlightedNav": ""}>Home</HashLink><br />
                <HashLink title="My Projects" to="/#projects" className={highlight === 'projects' ? "highlightedNav": ""}>Projects</HashLink><br />
                <HashLink title="Contact Me" to="/#contact" className={highlight === 'contact' ? "highlightedNav": ""}>Contact</HashLink><br />
                <HashLink title="View my resume" to="/resume" className={highlight === 'resume' ? "highlightedNav": ""}>Resume</HashLink><br />
                <a title="View my blog" rel="noreferrer" target="_blank" href="https://blog.andrewli.site/">Blog</a>
            </div>
        </div>
        </div>
    )
})
