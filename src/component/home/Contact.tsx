import React from 'react'

import { Footer } from '../Footer'


interface Props {
    highlight: string
}

export const Contact: React.FC<Props> = ({highlight}) => {

    return (
        <>
        <div id="contact" className="contact" style={{position: "relative"}}>
            <div className="mainContact">
                <h2>Contact</h2>
            </div>
            
            <div className="contactFooter">
                <Footer highlight={highlight} />
            </div>
        </div>
        </>
    )
}
