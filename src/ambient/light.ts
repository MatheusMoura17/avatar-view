import * as THREE from "three";

export const createLight = (): THREE.Group => {
  const group = new THREE.Group();

  const ambient = new THREE.AmbientLight(0xffffff, 3);
  const backfill = new THREE.DirectionalLight(0xffffff, 1);
  backfill.position.set(-10, 10, -40);

  const fill = new THREE.DirectionalLight(0xffffff, 4);
  fill.position.set(20, -20, 40);

  group.add(ambient)
  group.add(backfill);
  group.add(fill);

  return group;
}