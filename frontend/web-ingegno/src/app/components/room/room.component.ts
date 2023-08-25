import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
      
    ngOnInit(): void {
        this.createThreeJsRoom();
       }
      
       createThreeJsRoom(): void {
           const canvas = document.getElementById('logo-box');
   
           // we create our scene, material and two types of lights to place in our scene!
           const scene = new THREE.Scene();
   
           const material = new THREE.MeshLambertMaterial();
       
           const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
           scene.add(ambientLight);
       
           const pointLight = new THREE.PointLight(0xffffff, 10);
           pointLight.position.x = 2;
           pointLight.position.y = 2;
           pointLight.position.z = 2;
           scene.add(pointLight);
   
           const pointLight2 = new THREE.PointLight(0xffffff, 10);
           pointLight2.position.x = 6;
           pointLight2.position.y = 6;
           pointLight2.position.z = 6;
           scene.add(pointLight2);
   
           // we create two 3D geometries and add it to our scene
           const box = new THREE.Mesh(
               new THREE.BoxGeometry(1.5, 1.5, 1.5), 
               material
           );
       
           const torus = new THREE.Mesh(
              new THREE.TorusGeometry(5, 1.5, 16, 100),
              material
           );
       
           scene.add(torus, box);
   
           // we declare the screen sizes, create the camera and renderer!
           const canvasSizes = {
              width: window.innerWidth,
              height: window.innerHeight,
           };
       
           const camera = new THREE.PerspectiveCamera(
              75,
              canvasSizes.width / canvasSizes.height,
              0.001,
              1000
           );
           camera.position.z = 30;
           
           scene.add(camera);
       
           if (!canvas) {
              return;
           }
       
           const renderer = new THREE.WebGLRenderer({
              canvas: canvas,
           });
           renderer.setClearColor(0xe232222, 1);
           renderer.setSize(canvasSizes.width, canvasSizes.height);
   
           // we animate our 3D geometries and make the scene cooler!
           const clock = new THREE.Clock();
   
           const animateGeometry = () => {
               const elapsedTime = clock.getElapsedTime();
   
               // Update animation objects
               box.rotation.x = elapsedTime;
               box.rotation.y = elapsedTime;
               box.rotation.z = elapsedTime;
           
               torus.rotation.x = -elapsedTime;
               torus.rotation.y = -elapsedTime;
               torus.rotation.z = -elapsedTime;
           
               // Render
               renderer.render(scene, camera);
           
               // Call animateGeometry again on the next frame
               window.requestAnimationFrame(animateGeometry);            
           };
   
           animateGeometry();
       }
   }
   