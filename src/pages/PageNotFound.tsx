import React, {useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import gsap from 'gsap'

import { ReactComponent as PiratePenguin } from '../images/pirate.svg'
import { Navbar } from '../component/Navbar'

export const PageNotFound: React.FC = React.memo(() => {
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
    }, [history])
    useEffect(()=> {
        // on mount -> animation
        
        gsap.from('.header1', 1, {
            autoAlpha: 0,
            rotationX: 80,
            transformOrigin: '50% 50% -30px',
            ease: 'power3.easeOut',
        })
    }, [])

    return (
        <div className="block singles">
            <Navbar />
            <div className="singleBody">
                <PiratePenguin className="pageIcons" />
                <div className="pageText">
                    <h1 className='header1'>Error 404</h1>
                    <p>This page must’ve been <wbr />stolen by a pirate :{'('}</p>
                    <Link to="/" title="Go Home"><span className="homeIcon"><AiFillHome color="#2EA2F8" size={54} /></span>
                    Take me home</Link>
                </div>
            </div>
        </div>
    )
})
