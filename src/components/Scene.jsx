import { Canvas } from '@react-three/fiber'

import '../css/main.css'
import '../css/responsive.css'

import * as THREE from 'three'

import { useLoader, extend } from '@react-three/fiber'
// @ts-ignore 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// @ts-ignore 
import { EffectComposer, Bloom, Noise, Vignette, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

import { UnrealBloomPass } from 'three-stdlib'

import { Effects } from '@react-three/drei'

extend({ UnrealBloomPass })

const Scene = () => {

const gltf = useLoader(GLTFLoader, '../../models/lion-2.glb')


  return (
    <div id="scene">
        <Canvas camera={{fov: 50, near: 0.1, far: 1000, position: [0, 10, 70], }}>
        
            <primitive object={gltf.scene} material={new THREE.MeshBasicMaterial()} scale={10} position={[0,-22,0]} rotation={[0,2.5,0]} emissive="red" emissiveIntensity={1} toneMapped={false} />
            {/* <ambientLight intensity={1} color={'#edd5d5'} /> */}
            <directionalLight intensity={20} color="#D1A265" position={[500,500,-550]} />
            <directionalLight intensity={10} color="#2cbae8" position={[-500,500,-550]} />
            {/* <Environment preset="sunset" /> */}
    
            <Effects>
                <unrealBloomPass threshold={0} strength={100} radius={10} />
            </Effects>

            <EffectComposer>
             {/* <Bloom intensity={10.0} luminanceThreshold={0}  luminanceSmoothing={0.025}  mipmapBlur={false} /> */}
              <Noise opacity={0} />
              <Vignette eskil={false} offset={0} darkness={1.5} />
              <ToneMapping blendFunction={BlendFunction.NORMAL} adaptive={true} resolution={256} middleGrey={0.05} maxLuminance={100}
                averageLuminance={0.2} adaptationRate={0.2} />           
              </EffectComposer>
        </Canvas>
    </div>
  )
}

export default Scene