//Ejemplo de un Torus Knot en RA
import {Canvas} from "@react-three/fiber";
import XrTorusKnot from './XrTorusKnot.jsx';
import {ARButton, XR} from "@react-three/xr";


function EjAR() {
    return (
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrTorusKnot/>
                </XR>
            </Canvas>
        </>
    )
}

export default EjAR;