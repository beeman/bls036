import { Component, Input } from '@angular/core'
import * as THREE from 'three'
import { LoaderService, ThreeVector3 } from '@angular-three/core'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

@Component({
  selector: 'app-root',
  template: `
    <ngt-canvas
      (created)="$event.gl.setClearColor('black')"
      [camera]="{ position: [0, 0, 20] }"
      [scene]="{ fog: fog }"
      [shadows]="true"
    >
      <ngt-stats></ngt-stats>
      <ngt-ambient-light></ngt-ambient-light>
      <ngt-spot-light [castShadow]="true" [position]="[15, 20, 5]"></ngt-spot-light>
      <app-control></app-control>

      <app-spaceship></app-spaceship>
      <!--      <app-cube *ngFor="let pos of positions" [position]="pos"></app-cube>-->

      <!--      <app-plane></app-plane>-->
    </ngt-canvas>
  `,
})
export class AppComponent {
  fog = new THREE.Fog('black', 15, 25)
  positions = [
    [1, 0, 0],
    [-1, 0, 0],
    [1, 2, 0],
    [-1, 2, 0],
  ]
}

@Component({
  selector: 'app-cube',
  template: `
    <ngt-mesh
      [position]="position"
      [scale]="active ? [2, 2, 2] : [1, 1, 1]"
      (click)="active = !active"
      (pointerover)="hover = true"
      (pointerout)="hover = false"
      [castShadow]="true"
    >
      <ngt-box-geometry> </ngt-box-geometry>
      <ngt-mesh-physical-material [parameters]="{ color: hover ? '#00ff00' : '#ff0000' }"> </ngt-mesh-physical-material>
    </ngt-mesh>
  `,
})
export class CubeComponent {
  @Input() position: ThreeVector3
  active = false
  hover = false
}

@Component({
  selector: 'app-control',
  template: `
    <ngt-orbit-controls (animateReady)="animate($event.animateObject)" (ready)="ready($event)"></ngt-orbit-controls>
  `,
})
export class ControlComponent {
  ready(controls: OrbitControls): void {
    controls.autoRotate = true
    controls.autoRotateSpeed = 5
    // controls.maxPolarAngle = Math.PI / 3
    // controls.minPolarAngle = Math.PI / 3
  }

  animate(animateObject: OrbitControls): void {
    animateObject.update()
  }
}

@Component({
  selector: 'app-plane',
  template: `
    <ngt-mesh [receiveShadow]="true" [rotation]="[-halfPI, 0, 0]" [position]="[0, -0.5, 0]">
      <ngt-plane-geometry [args]="[100, 100]"></ngt-plane-geometry>
      <ngt-mesh-physical-material [parameters]="{ color: 'white' }"> </ngt-mesh-physical-material>
    </ngt-mesh>
  `,
})
export class PlaneComponent {
  halfPI = Math.PI / 2
}

@Component({
  selector: 'app-spaceship',
  template: `
    <ng-container *ngIf="model$ | async as model">
      <ngt-primitive [object]="model.scene"></ngt-primitive>
    </ng-container>
  `,
})
export class SpaceShipComponent {
  model$ = this.service.use(GLTFLoader, 'assets/scene.gltf')
  constructor(private readonly service: LoaderService) {}
}
