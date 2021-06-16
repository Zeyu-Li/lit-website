import React, {useState, useEffect} from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import { Navbar, Footer } from '../component/Component'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


export const Resume: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | Resume"
    }, [])

    const removeTextLayerOffset = () => {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent")
            textLayers.forEach((layer: any) => {
            const { style } = layer
            style.top = "0"
            style.left = "0"
            style.transform = ""
        })
    }

    return (
        <>
            <Navbar highlight="resume" />
            <div className="block">
                <div className="resumeBody">
                    <h1>Resume</h1>
                    <p><a>Direct link</a> to my resume or preview below</p>
                    <Document file={"resume.pdf"}>
                        <div style={{paddingLeft: window.innerWidth * 0.07}}>
                            <Page onLoadSuccess={removeTextLayerOffset} pageNumber={1} width={window.innerWidth * 0.56} />
                        </div>
                    </Document>
                </div>
                <Footer highlight="resume" />
            </div>
        </>
    )
}
