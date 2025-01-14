import * as THREE from 'three';

export const createScene = () => {
  const scene = new THREE.Scene();
  const textureLoader = new THREE.TextureLoader();
  const basename = import.meta.env.BASE_URL;
  textureLoader.load(basename + "assets/background.jpg", (texture) => {
    scene.background = texture;
  })
  return scene;
}