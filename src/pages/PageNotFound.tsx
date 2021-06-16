import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

import { ReactComponent as PiratePenguin } from '../images/pirate.svg'
import { Navbar } from '../component/Component';

export const PageNotFound: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | 404"
    }, [])

    const troll = () => {
        // we do a little trolling :p
    }

    return (
        <div className="block singles">
            <Navbar />
            <div className="singleBody">
                <PiratePenguin className="pageIcons" onClick={troll} />
                <div className="pageText">
                    <h1>Error 404</h1>
                    <p>This page must’ve been <wbr />stolen by a pirate :{'('}</p>
                    <Link to="/"><span className="homeIcon"><AiFillHome color="#2EA2F8" size={54} /></span>
                    Take me home</Link>
                </div>
            </div>
        </div>
    )
}
