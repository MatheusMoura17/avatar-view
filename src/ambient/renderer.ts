import * as THREE from 'three';

export const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  document.body.appendChild(renderer.domElement);

  renderer.toneMapping = THREE.NeutralToneMapping

  resizeRenderer(renderer);

  return renderer;
}

export const resizeRenderer = (renderer: THREE.WebGLRenderer) => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}