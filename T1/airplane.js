import * as THREE from  'three';
import { degreesToRadians } from '../libs/util/util.js';

export default class Airplane extends THREE.Object3D{
    
    constructor(geometry, material){
        super();
        //esse objeto na verdade é o holder do avião feito para manter os eixos de direção
        //que seriam perdidos caso o cone fosse rotacionado na horizontal pra parecer uma avião
        //então o avião é rotacionado e adicionado ao holder do avião
        this.position.set(0.0, 70.0, 40.0);
        let localScale = 1.0
        const cone = new THREE.Mesh(geometry, material);
        cone.scale.set(localScale, localScale, localScale);
        this.plane = cone;
        let angle = degreesToRadians(-90);
        cone.rotateX(angle);
        this.add(cone);

    }

    moveLeft(){
        if(this.position.x>-50)
        this.translateX(-1);
    }

    moveRight(){
        if(this.position.x<50)
        this.translateX(1);
    }

    moveUp(){
        this.translateZ(-1);
    }

    moveDown(){
        this.translateZ(1);
    }
    
    fall(){
        this.rotation.y+=0.08;
        this.position.y-=0.6;
    }

}