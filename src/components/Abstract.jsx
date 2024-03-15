import React, { useRef, useEffect } from 'react'

import * as THREE from 'three';

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { createSculpture, createSculptureWithGeometry } from 'shader-park-core';
import { spCode } from './Shader.jsx';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const Abstract = () => {

const rendererRef = useRef(null);

useEffect(() => {

let params = { time: 0, scale: 1};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 2000 );

camera.position.z = -0.5;  
camera.position.y = 0;
camera.position.x = 0;
camera.rotateX(-1)
camera.rotateY(50)
camera.rotateZ(40)


// create a plane + load texture

// const texture = new THREE.TextureLoader().load( t2 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texture } );




// create shaderpark

let mesh = createSculpture(spCode, () => ( {
  time: params.time,
} ));
scene.add(mesh);




const light = new THREE.AmbientLight( 0xffffff, 1 ); // soft white light
scene.add( light );

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// postprocessing + bloom

const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);

const bloomPass = new UnrealBloomPass (
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.35,
    0.1,
    0,
);

composer.addPass(bloomPass);

renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.03;

// const controls = new OrbitControls( camera, document.body );

renderer.clear();

// render function

function animate() {

	requestAnimationFrame(animate);
  // renderer.render(scene, camera);

 
  composer.render();

  // controls.update();

  params.time += 0.0015;
  params.scale += 1;

  // renderer.render( scene, camera );

  // resizing 
  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  })
  

  
	
}

// renderer.setAnimationLoop(animate);
animate();

}, []);


  return (
    <div>
       
    </div>
  )
};



export default Abstract