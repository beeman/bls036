import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent, ControlComponent, CubeComponent, PlaneComponent, SpaceShipComponent } from './app.component'
import { ThreeCoreModule, ThreePrimitiveModule } from '@angular-three/core'
import { ThreeMeshModule } from '@angular-three/core/meshes'
import { ThreeBoxBufferGeometryModule, ThreePlaneBufferGeometryModule } from '@angular-three/core/geometries'
import { ThreeMeshBasicMaterialModule, ThreeMeshPhysicalMaterialModule } from '@angular-three/core/materials'
import { ThreeOrbitControlsModule } from '@angular-three/controls/orbit-controls'
import { ThreeAmbientLightModule, ThreeSpotLightModule } from '@angular-three/core/lights'
import { ThreeStatsModule } from '@angular-three/core/stats'

@NgModule({
  declarations: [AppComponent, CubeComponent, ControlComponent, PlaneComponent, SpaceShipComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreeCoreModule,
    ThreeMeshModule,
    ThreeBoxBufferGeometryModule,
    ThreeMeshBasicMaterialModule,
    ThreeOrbitControlsModule,
    ThreeMeshPhysicalMaterialModule,
    ThreeAmbientLightModule,
    ThreeSpotLightModule,
    ThreePlaneBufferGeometryModule,
    ThreePrimitiveModule,
    ThreeStatsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
