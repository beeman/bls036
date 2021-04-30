import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent, CubeComponent } from './app.component'
import { ThreeCoreModule } from '@angular-three/core'
import { ThreeMeshModule } from '@angular-three/core/meshes'
import { ThreeBoxBufferGeometryModule } from '@angular-three/core/geometries'
import { ThreeMeshBasicMaterialModule } from '@angular-three/core/materials'

@NgModule({
  declarations: [AppComponent, CubeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreeCoreModule,
    ThreeMeshModule,
    ThreeBoxBufferGeometryModule,
    ThreeMeshBasicMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
