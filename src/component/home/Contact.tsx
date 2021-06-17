import React from 'react'

import { Footer } from '../Footer'


interface Props {
    highlight: string
}

export const Contact: React.FC<Props> = ({highlight}) => {

    return (
        <>
        <div className="contact">
            <div className="mainContact">
                <h2 id="contact">Contact</h2>
            </div>
            
            <Footer highlight={highlight} />
        </div>
        </>
    )
}
