import * as THREE from "./three.module.min.js";


// Scene Mesh Camera Renderer

//Scene 
const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xcccccc, 10,15);

//Group
const group = new THREE.Group();

//Mesh 

//mesh1
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "purple"});
const mesh = new THREE.Mesh(geometry,material);

//mesh2
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshStandardMaterial();
materialT.color = new THREE.Color(0x3268F8);
materialT.roughness = 0.2;
materialT.metalness = 0.7;
materialT.wireframe = true;

const meshT = new THREE.Mesh(geometryT,materialT);
meshT.position.y= 3;

//PointLight
const pointLight = new THREE.PointLight(0xffffff,0.1);
pointLight.position.x = 1;
pointLight.position.y =2;
pointLight.position.z = 1;
pointLight.intensity = 22;

scene.add(pointLight);


group.add(mesh,meshT);
scene.add(group)

//Camera 
const aspect ={
    width:window.innerWidth,
    height:window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height,1,2000);// near value is 1, and far value is 2000
camera.position.x =-2;
camera.position.y =1;
camera.position.z= 5;
// camera.rotation.y =Math.PI *1.2;
scene.add(camera);


//Renderer 
const canvas1 = document.querySelector(".draw"); //select the canvas element 
const renderer = new THREE.WebGLRenderer({canvas : canvas1}); //add the webGLRenderer
renderer.setSize(aspect.width,aspect.height); //Renderer size
renderer.render(scene,camera) //display what the camera is the scene captured 