import React, {useState, useEffect} from 'react'
import { Parallax, Background } from 'react-parallax'
import { VscGithub } from 'react-icons/vsc'
import { MdWeb } from 'react-icons/md'
import { FaGamepad } from 'react-icons/fa'


export const Projects: React.FC = () => {

    return (
        <>
            <div id="projects" className="projects">
                <h2>Projects</h2>
                <div className="singleProject">
                    <h4>Chatter</h4>
                    <Parallax  bgImage={"chatter.png"} bgImageAlt="chatter screenshots" strength={300} style={{width: "70vw"}}>
                        {/* <Background className="custom-bg">
                            <img alt="chatter screenshots" src={"chatter.png"} />
                        </Background> */}
                        <div style={{height: "44vw"}}></div>
                    </Parallax>
                    <p>
                        A realtime chat website
                        <br />{'>'} Using React, Firebase, JavaScript
                    </p>
                    <a href="https://github.com/Zeyu-Li/chatter" title="Chatter repo link (GitHub)"><span className="contactIcons"><VscGithub size={32} color="2EA2F8" /></span>Source code</a><br />
                    <a href="https://chatter-zeyu-li.vercel.app/" title="Chatter Project Demo"><span className="contactIcons"><MdWeb size={32} color="2EA2F8" /></span>Demo</a>
                </div>
                <div className="singleProject">
                    <h4 style={{paddingBottom: 0}}>Lua Runner</h4>
                    <p>
                        A NPM Typescript module that runs Lua with over <b>1,800 downloads</b> 
                        <br />{'>'} Using TypeScript, Webassembly
                    </p>
                    <a href="https://github.com/Zeyu-Li/lua-runner" title="Lua Runner source code"><span className="contactIcons"><VscGithub size={32} color="2EA2F8" /></span>Source code</a><br />
                    <a href="https://www.npmjs.com/package/lua-runner" title="Check NPM page"><span className="contactIcons"><MdWeb size={32} color="2EA2F8" /></span>Demo</a>
                </div>
                <div className="singleProject">
                    <h4>Django Ecommerce</h4>
                    <Parallax  bgImage={"django.png"} bgImageAlt="django screenshots" strength={300} style={{width: "70vw"}}>
                        {/* <Background className="custom-bg">
                            <img alt="django screenshots" src={"django.png"} />
                        </Background> */}
                        <div style={{height: "44vw"}}></div>
                    </Parallax>
                    <p>
                        An ecommerce website build on Django and Bootstrap with login and shopping cart (connected to Stripe)
                        <br />{'>'} Using Python (Django), Stripe, JavaScript, CSS, HTML, Bootstrap
                    </p>
                    <a href="https://github.com/Zeyu-Li/chatter" title="Django source code on GitHub"><span className="contactIcons"><VscGithub size={32} color="2EA2F8" /></span>Source code</a><br />
                </div>
                <div className="singleProject" style={{paddingBottom: "5vh"}}>
                    <h4>Advanced Unity Tutorial</h4>
                    <img alt="django screenshots" src={"django.png"} />
                    <p>
                        An Advanced Unity Tutorial, part of a larger Unity Tutorial series. Play demo is found below. 
                        <br />{'>'} Using C#, Blender, Adobe Illustator, Unity 
                    </p>
                    <a href="https://github.com/Zeyu-Li/Unity-Advanced-3D-Tutorial" title="Unity Advanced Tutorial source code on GitHub"><span className="contactIcons"><VscGithub size={32} color="2EA2F8" /></span>Source code</a><br />
                    <a href="https://andrewli.itch.io/unity-advanced-tutorial" title="Game demo"><span className="contactIcons"><FaGamepad size={32} color="2EA2F8" /></span>Demo</a><br />
                </div>
                <div className="endOfProjects">
                    <p>
                        Over 100 projects/repos on <a href="https://github.com/Zeyu-Li">GitHub</a>
                    </p>
                </div>
            </div>
        </>
    )
}
