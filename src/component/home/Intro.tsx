import React, {useState, useEffect} from 'react'
import { ReactComponent as PenguinCoin } from '../../images/coin.svg'


export const Intro: React.FC = () => {
    const [loaded, setLoad] = useState(false)

    useEffect(()=> {
        setLoad(true)
    }, [])

    return (
        <>
        <div className="block singles">
            <div className="intro">
                <PenguinCoin className="pageIcons" />
                <div className="pageText">
                    <h1>Andrew Li</h1>
                    <div className={`divider ${loaded ? "dividerLoaded" : ""}`} />
                    <p className="singleText">Full Stack <wbr />and <wbr />Mobile Developer</p>
                </div>
            </div>
        </div>
        </>
    )
}
