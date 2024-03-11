import { Canvas } from '@react-three/fiber'

import '../css/main.css'
import '../css/responsive.css'

import React, {useMemo} from 'react'

import { useLoader, useThree, extend} from '@react-three/fiber'
// @ts-ignore 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// @ts-ignore 
import { Environment } from '@react-three/drei'
import { DepthOfField, EffectComposer, Noise, Vignette, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

import { Effects } from '@react-three/drei'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

extend({ EffectComposer, RenderPass, UnrealBloomPass });


const Scene = () => {

const gltf = useLoader(GLTFLoader, '../../models/lion-2.glb')

  return (
    <div id="scene">
        <Canvas camera={{fov: 50, near: 0.1, far: 1000, position: [0, 10, 70], }}>
        
            <primitive object={gltf.scene} scale={10} position={[0,-22,0]} rotation={[0,2.5,0]} emissive={"white"} emissiveIntensity={1} />
            {/* <ambientLight intensity={1} color={'#edd5d5'} /> */}
            <directionalLight intensity={20} color="#D1A265" position={[500,-500,-550]} />
            <directionalLight intensity={10} color="#2cbae8" position={[-500,500,-550]} />
            {/* <Environment preset="sunset" /> */}
    
            <Effects multisamping={8} renderIndex={1} disableGamma={false} disableRenderPass={false} disableRender={false}>
            <unrealBloomPass attachArray="passes" args={[undefined, 3.5, 1, 0]} />
            </Effects>
       

            <EffectComposer>
              <DepthOfField focusDistance={0.1} focalLength={10} bokehScale={20} height={480} />
              <unrealBloomPass attachArray="passes" args={[undefined, 3, 0.8, 0]} />
              <Noise opacity={0} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
              <ToneMapping blendFunction={BlendFunction.NORMAL} adaptive={true} resolution={256} middleGrey={0.05} maxLuminance={100}
                averageLuminance={0.2} adaptationRate={0.2} />           
              </EffectComposer>
        </Canvas>
    </div>
  )
}

export default Scene