import React, {useState, useEffect} from 'react'
import { IoMdMail } from 'react-icons/io'
import { AiFillLinkedin } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'

import { Footer } from '../Footer'


interface Props {
    highlight: string
}

export const Contact: React.FC<Props> = React.memo(({highlight}) => {
    const [iconSize, setIconSize] = useState(window.innerWidth > 800 ? 60 : 28)

    // on resize
    useEffect(() => {
        const resizeListener = () => {
            setIconSize(window.innerWidth > 800 ? 60 : 28)
        }
        
        // set resize listener
        window.addEventListener('resize', resizeListener)
    }, [])

    return (
        <>
        <div id="contact" className="contact" style={{position: "relative"}}>
            <div className="mainContact">
                <h2>Contact</h2>
                <a href="mailto:zeyu.li23@gmail.com" title="Email me"><span className="contactIcons"><IoMdMail size={iconSize} color="2EA2F8" /></span>zeyu.li23<wbr />@gmail.com</a><br/>
                <a href="https://www.linkedin.com/in/andrew-li23/" title="Connect with me on LinkedIn"><span className="contactIcons"><AiFillLinkedin size={iconSize} color="2EA2F8" /></span>andrew-li23</a><br/>
                <a href="https://github.com/Zeyu-Li" title="Check my GitHub"><span className="contactIcons"><VscGithub size={iconSize} color="2EA2F8" /></span>Zeyu-Li</a>
            </div>
            
            <div className="contactFooter">
                <Footer highlight={highlight} />
            </div>
        </div>
        </>
    )
})
