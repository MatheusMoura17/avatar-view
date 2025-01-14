import * as THREE from 'three';

import backgroundImg from "../images/background.jpg"

export const createScene = () => {
  const scene = new THREE.Scene();
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(backgroundImg, (texture) => {
    scene.background = texture;
  })
  return scene;
}