import * as THREE from "three";
import Common from "./Common";

import Simulation from "./Simulation";
import face_vert from "./glsl/face.vert";
import color_frag from "./glsl/color.frag";

export default class Output {
  constructor() {
    this.init();
  }

  init() {
    this.simulation = new Simulation();

    this.scene = new THREE.Scene();
    this.camera = new THREE.Camera();

    this.output = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.RawShaderMaterial({
        vertexShader: face_vert,
        fragmentShader: color_frag,
        uniforms: {
          velocity: {
            value: this.simulation.fbos.vel_0.texture,
          },
          boundarySpace: {
            value: new THREE.Vector2(),
          },
        },
      })
    );

    this.scene.add(this.output);
  }
  addScene(mesh) {
    this.scene.add(mesh);
  }

  resize() {
    this.simulation.resize();
  }

  render() {
    Common.renderer.setRenderTarget(null);
    Common.renderer.render(this.scene, this.camera);
  }

  update() {
    this.simulation.update();
    this.render();
  }
}
