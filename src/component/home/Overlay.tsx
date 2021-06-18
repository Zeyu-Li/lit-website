import React, {useState, useEffect, Suspense} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Overlay: React.FC = () => {
    const gltf = useLoader(GLTFLoader, './penguin.gltf')
    const myMesh = React.useRef()
    useEffect(()=> {
        // set rotation
    }, [])

    return (
        <div className="model">
        <Suspense fallback={null}>
            <Canvas>
        <Suspense fallback={null}>
                    <group ref={myMesh}>
                        <primitive object={gltf.scene} />
                    </group>
        </Suspense>
                <ambientLight intensity={1} />
            </Canvas>
        </Suspense>
        </div>
    )
}
