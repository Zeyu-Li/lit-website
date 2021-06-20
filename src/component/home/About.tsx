import React from 'react'
import { HashLink } from 'react-router-hash-link'


export const About: React.FC = () => {

    return (
        <div id="about" className="block white">
            <div className="about">
                <h2>About Me</h2>
                <h3 className="singleText">I’m a full stack dev</h3>
                <p>
                    Currently a <b>Research Assistant</b> at the University of Alberta where I work as a <b>fullstack mobile dev</b>. I’m also studying computer science and very active on GitHub (over 130 repos/<wbr />projects). If you want to add me on your team or just want to chat, click on <HashLink to="/#contact" >Contact</HashLink>
                </p>
            </div>
        </div>
    )
}
