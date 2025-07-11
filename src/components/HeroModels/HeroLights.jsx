import * as THREE from 'three'

const HeroLights = () =>{
    return (
        <>
            {/* lamp's light */}
            <spotLight
                position={[2, 5, 6]}
                angle={0.10}
                penumbra={0.2}
                intensity={40}
                color="white"
            />

            {/* bluish overhead lamp */}
            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                penumbra={0.5}
                intensity={50}
                color="#4cc9f0"
            />

            {/* purplish side fill */}
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                penumbra={1}
                intensity={30}
                color="#9d4edd"
            />

            {/* area light for soft moody fill */}
            <primitive
                object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
                position={[1, 6, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={20}
            />

            {/* subtle point light for atmospheric tone */}
            <pointLight position={[0, 1, 0]} intensity={30} color="#7209b7" />
            <pointLight position={[1, 2, -2]} intensity={50} color="#0d00a4" />
        </>
    )
}

export default HeroLights