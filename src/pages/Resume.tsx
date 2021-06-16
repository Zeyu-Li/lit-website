import React, {useState, useEffect} from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Navbar, Footer } from '../component/Component'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


export const Resume: React.FC = () => {
    // sets title
    useEffect(() => {
        document.title = "Andrew's Portfolio | Resume"
    }, [])

    const [PDFWidth, setPDFWidth] = useState(window.innerWidth > 1050 ? window.innerWidth * 0.52 : window.innerWidth * 0.7)

    useEffect(() => {
        const resizeListener = () => {
            setPDFWidth(window.innerWidth > 1050 ? window.innerWidth * 0.52 : window.innerWidth * 0.7)
        }
        
        // set resize listener
        window.addEventListener('resize', resizeListener)
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
                    <p><a title="Download resume" href="resume.pdf" target="_blank">Direct link</a> to my resume or preview below</p>
                    <Document file={"resume.pdf"}>
                        <div style={{height: PDFWidth * (11/8.5)}}>
                            <Page onLoadSuccess={removeTextLayerOffset} pageNumber={1} width={PDFWidth} />
                        </div>
                    </Document>
                </div>
                <Footer highlight="resume" />
            </div>
        </>
    )
}
