import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core'
import * as THREE from 'three'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('tmpl', { static: true }) tmpl: ElementRef<HTMLCanvasElement>

  constructor(private readonly zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      const renderer = new THREE.WebGLRenderer({
        canvas: this.tmpl.nativeElement,
      })
      renderer.setSize(window.innerWidth, window.innerHeight)

      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5

      const animate = () => {
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()
    })
  }
}
