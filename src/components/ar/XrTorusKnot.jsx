import {OrbitControls} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";

function XrTorusKnot() {
    //useRef: hook de react para darnos acceso directo a un elemento, en este
    //caso para darnos acceso directo al nudo torus que vamos a mostrar
    const torusKnotRef = useRef();

    //useFrame: hook de react-three/fiber (librería para trabajar en 3D) que
    //permite rotar el objeto 3D alrededor de un eje, x, y o z.
    //En este ejemplo es en el eje y
    useFrame((state, delta) => {
        torusKnotRef.current.rotation.y += delta;
    });

    return (
        <>
            {/*<OrbitControls /> permite mover los objetos con el ratón.
            Sólo sirve para la web, pero no cuando estemos en RA*/}
            <OrbitControls/>
            {/*<ambientLight es para poner luz a la escena*/}
            <ambientLight/>
            {/*dentro del mesh se dibuja la figura, que en este caso es un nudo torus*/}
            <mesh ref={torusKnotRef} position={[0, 0, -5]}>
                {/*Constructor para el nudo torus*/}
                <torusKnotGeometry args={[4, 0.5, 100, 15]}/>
                <meshStandardMaterial color='lightblue'/>
            </mesh>
        </>
    )
}

export default XrTorusKnot;
