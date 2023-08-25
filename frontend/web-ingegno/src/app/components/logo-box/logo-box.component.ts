import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-logo-box',
  templateUrl: './logo-box.component.html',
  styleUrls: ['./logo-box.component.scss']
})
export class CanvasBoxComponent implements OnInit {
    ngOnInit(): void {
     this.createThreeJsBox();
    }
   
    createThreeJsBox(): void {
        const canvas = document.getElementById('logo-box');
        const scaleHeight = 0.8;

        // we create our scene ...
        const scene = new THREE.Scene();

        // ... the material ...
        //const material = new THREE.MeshLambertMaterial();
        var texture = new THREE.TextureLoader().load( "./assets/img/photo_5873190219493260807_c.jpg");
        var material = new THREE.MeshBasicMaterial( { map: texture } );

        // ... the ambient light ...
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);    

        // ... and two additional lights
        const pointLight = new THREE.PointLight(0xffffff, 10);
        pointLight.position.x = 2;
        pointLight.position.y = 2;
        pointLight.position.z = 2;
//        scene.add(pointLight);
        const pointLight2 = new THREE.PointLight(0xffffff, 100);
        pointLight2.position.x = 10;
        pointLight2.position.y = 10;
        pointLight2.position.z = 10;
        scene.add(pointLight2);

        // we create two 3D geometries and add it to our scene
        const box = new THREE.Mesh(
            new THREE.BoxGeometry(13, 13, 13), 
            material
        );
    
        const torus = new THREE.Mesh(
           new THREE.TorusGeometry(5, 1.5, 16, 100),
           material
        );
    
        scene.add(box);

        // we declare the screen sizes ...
        const canvasSizes = {
           width: window.innerWidth,
           height: window.innerHeight * scaleHeight,
        };
        // ... create the camera ...
        const camera = new THREE.PerspectiveCamera(
           75,
           canvasSizes.width / canvasSizes.height,
           0.001,
           1000
        );
        camera.position.z = 30;
        
        scene.add(camera);
    
        if (!canvas) {
            console.warn("missing canvas object")
            return;
        }
        // ... and the render
        const renderer = new THREE.WebGLRenderer({
           canvas: canvas,
        });
        renderer.setClearColor(0x333F47, 1);
        renderer.setSize(canvasSizes.width, window.innerHeight * scaleHeight);

        // Create an event listener that resizes the renderer with the browser window.
        window.addEventListener('resize', function() {
            var WIDTH = window.innerWidth,
                HEIGHT = window.innerHeight * scaleHeight;
            renderer.setSize(WIDTH, HEIGHT);
            camera.aspect = WIDTH / HEIGHT;
            camera.updateProjectionMatrix();
        });
        
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
