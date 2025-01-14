import * as THREE from "three"

import { createScene } from './ambient/scene';
import { animateAvatar, createAvatar, createAvatarMixer, makeAvatarBlink, playAvatarMacarena, toggleAvatarGlasses, toggleAvatarMask } from './ambient/avatar';
import { createCamera, resizeCamera } from './ambient/camera';
import { createRenderer, resizeRenderer } from './ambient/renderer';
import { createLight } from './ambient/light';
import "./main.css"

const load = async () => {
	const clock = new THREE.Clock();
	const scene = createScene();
	const camera = createCamera();
	const renderer = createRenderer();
	const lights = createLight();
	const avatar = await createAvatar();
	const avatarMixer = await createAvatarMixer(avatar);

	scene.add(avatar);
	scene.add(lights);


	const animate = () => {
		var delta = clock.getDelta();
		avatarMixer.update(delta);
		animateAvatar(avatar)
		renderer.render(scene, camera)
	}

	const resize = () => {
		resizeCamera(camera)
		resizeRenderer(renderer)
	}

	renderer.setAnimationLoop(animate);
	makeAvatarBlink(avatar);

	window.addEventListener('resize', resize);
	window.toggleGlasses = (value: boolean) => toggleAvatarGlasses(avatar, value);
	window.toggleMask = (value: boolean) => toggleAvatarMask(avatar, value);
	window.playMacarena = () => playAvatarMacarena(avatarMixer);
	window.ReactNativeWebView?.postMessage("ready");
}

load();