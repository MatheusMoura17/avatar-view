import * as THREE from "three";

export const createCamera = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
  camera.position.set(0, 0, 2);
  return camera;
}

export const resizeCamera = (camera: THREE.PerspectiveCamera) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}