<template>
  <Renderer
    ref="renderer"
    resize
    antialias
    :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }"
  >
    <Camera :position="{ x: 5, y: 5, z: 5 }" />
    <Scene background="#ffffff">
      <AmbientLight color="#808080"></AmbientLight>
      <PointLight color="#ffffff" :position="{ y: 50, z: 0 }"></PointLight>
      <PointLight color="#ffffff" :position="{ y: -50, z: 0 }"></PointLight>
      <PointLight color="#ffffff" :position="{ y: 0, z: 0 }"></PointLight>
      <!-- <GltfModel src="/police_car/scene.gltf" /> -->
      <GltfModel src="/artist_workroom/scene.gltf" />
    </Scene>
  </Renderer>
</template>

<script>
import {
  Camera,
  Renderer,
  Scene,
  AmbientLight,
  PointLight,
  GltfModel,
} from "troisjs";
export default {
  components: { Camera, Renderer, Scene, AmbientLight, PointLight, GltfModel },
};
</script>
