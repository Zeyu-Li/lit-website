import React, {useState, useEffect, Suspense} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'

import Model from './Model'

export const Overlay: React.FC = () => {

    return (
        <div className="model">
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <ambientLight intensity={1} />
            </Canvas>
        </div>
    )
}
