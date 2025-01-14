import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const isBone = (object: THREE.Object3D): object is THREE.Bone => {
  return (object as THREE.Bone).isBone === true;
};

const renameAvatarBones = (avatar: THREE.Object3D) => {
  avatar.traverse((child) => {
    if (isBone(child)) {
      child.name = `mixamorig${child.name}`;
    }
    console.log(child.name)
  });
};

export const createAvatarMixer = async (avatar: THREE.Group) => {
  const fbxLoader = new FBXLoader();
  const basename = import.meta.env.BASE_URL;
  const idleFbx = await fbxLoader.loadAsync(basename + "assets/animations/idle.fbx");

  const clip = idleFbx.animations[0];

  const mixer = new THREE.AnimationMixer(avatar);
  const action = mixer.clipAction(clip);

  action.play();

  return mixer;
}

export const playAvatarMacarena = async (mixer: THREE.AnimationMixer) => {
  const fbxLoader = new FBXLoader();
  const basename = import.meta.env.BASE_URL;
  const idleFbx = await fbxLoader.loadAsync(basename + "assets/animations/macarena.fbx");

  const clip = idleFbx.animations[0];

  const action = mixer.clipAction(clip);

  mixer.stopAllAction();

  action.play();

  return mixer;
}

export const animateAvatar = (avatar: THREE.Group) => {
  avatar.traverse((child) => {
    if (isBone(child) && child.name === "mixamorigHips") {
      child.position.set(0, 0, 0);
    }
  });
}

export const makeAvatarBlink = (avatar: THREE.Group) => {
  const leftEye = avatar.getObjectByName("EyeLeft") as THREE.Bone;
  const rightEye = avatar.getObjectByName("EyeRight") as THREE.Bone;

  const blinkEyes = () => {
    leftEye.rotation.x = Math.PI / 2;
    rightEye.rotation.x = Math.PI / 2;

    setTimeout(() => {
      leftEye.rotation.x = 0;
      rightEye.rotation.x = 0;
    }, 100);
  };

  setInterval(blinkEyes, 3000);
};

export const createAvatar = async () => {
  const gltfLoader = new GLTFLoader();
  const gltf = await gltfLoader.loadAsync('https://models.readyplayer.me/6785bf6c9d033321df15497c.glb')
  const avatar = gltf.scene;
  avatar.position.set(0, -1.3, 0.5);
  avatar.scale.set(2, 2, 2);

  renameAvatarBones(avatar);
  toggleAvatarGlasses(avatar, false);
  toggleAvatarMask(avatar, false);

  return avatar
}

export const toggleAvatarGlasses = (avatar: THREE.Group, value: boolean) => {
  const item = avatar.getObjectByName("Wolf3D_Glasses");
  if (item) item.visible = value
}

export const toggleAvatarMask = (avatar: THREE.Group, value: boolean) => {
  const item = avatar.getObjectByName("Wolf3D_Facewear");
  if (item) item.visible = value
}