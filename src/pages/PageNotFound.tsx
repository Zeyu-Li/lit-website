import React, {useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

import { ReactComponent as PiratePenguin } from '../images/pirate.svg'
import { Navbar } from '../component/Component';

export const PageNotFound: React.FC = () => {
    const history = useHistory()
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | 404"
        let eyepatch: HTMLElement | null = document.querySelector('.eyepatch')
        let eyepatchPath: HTMLElement | null = document.querySelector('.eyepatchPath')
        if (eyepatch) {
            eyepatch.style.cursor= "pointer"
        }
        if (eyepatchPath) {
            eyepatchPath.onclick = () => {
                history.push('/secretsauce')
            }
        }
    }, [])

    return (
        <div className="block singles">
            <Navbar />
            <div className="singleBody">
                <PiratePenguin className="pageIcons" />
                <div className="pageText">
                    <h1>Error 404</h1>
                    <p>This page must’ve been <wbr />stolen by a pirate :{'('}</p>
                    <Link to="/" title="Go Home"><span className="homeIcon"><AiFillHome color="#2EA2F8" size={54} /></span>
                    Take me home</Link>
                </div>
            </div>
        </div>
    )
}
