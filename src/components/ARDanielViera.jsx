import Dashboard from "./Dashboard"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import {useLoader} from "@react-three/fiber"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

function Scene() {
    const gltf = useLoader(GLTFLoader, "/korrigan.gltf")
    return <primitive object={gltf.scene} position={[0, -2.5, 0]} scale={12}/>
}

function ARDanielViera() {
    return <>
        <Dashboard/>
        <Canvas>
            <Suspense fallback={null}>
                <Scene />
                <OrbitControls />
                <Environment preset="sunset" />
            </Suspense>
        </Canvas>
    </>
}

export default ARDanielViera