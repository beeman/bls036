import { Component } from '@angular/core'
import { Mesh } from 'three'
import { ThreeEvent } from '@angular-three/core'

@Component({
  selector: 'app-root',
  template: `
    <ngt-canvas>
      <app-cube></app-cube>
    </ngt-canvas>
  `,
})
export class AppComponent {}

@Component({
  selector: 'app-cube',
  template: `
    <ngt-mesh
      [scale]="active ? [2, 2, 2] : [1, 1, 1]"
      (click)="onClick($event)"
      (pointerover)="hover = true"
      (pointerout)="hover = false"
      (animateReady)="animate($event.animateObject)"
    >
      <ngt-box-geometry> </ngt-box-geometry>
      <ngt-mesh-basic-material [parameters]="{ color: hover ? '#00ff00' : '#ff0000' }"> </ngt-mesh-basic-material>
    </ngt-mesh>
  `,
})
export class CubeComponent {
  active = false
  hover = false
  animate(cube: Mesh): void {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
  }

  onClick($event: ThreeEvent<MouseEvent>): void {
    console.log($event)
    this.active = !this.active
  }
}
