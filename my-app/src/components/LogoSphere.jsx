import { useRef } from 'react'
import {  useFrame, useLoader } from "@react-three/drei"
import { TextureLoader } from 'three'

export default function LogoSphere({ textureUrl, position ,  onClick}) {
    const meshRef = useRef()
    const texture = useLoader(TextureLoader, textureUrl)


    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01 // spin
        }
    })

    return (
        <mesh ref={meshRef} position={position} onClick={onClick}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}