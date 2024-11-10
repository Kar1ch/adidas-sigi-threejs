import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x7fffe3 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth - 100, window.innerHeight - 100 );
const container = document.getElementById('canvas-container')
container.appendChild( renderer.domElement );




const loader = new GLTFLoader();
let loadedModel;
loader.load( 'adidas_sigi_merge.glb', function ( gltf ) {
    loadedModel = gltf
    //gltf.scene.rotation.z = 0.1
    gltf.scene.rotation.x = 0.3
    
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );


camera.position.z = 17.5;


function animate() {
    if (loadedModel){

        loadedModel.scene.rotation.y -= 0.01
    }
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
