import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ShapesComponent } from './shapes/shapes.component';
import { CircleComponent } from './shapes/circle/circle.component';
import { RectangleComponent } from './shapes/rectangle/rectangle.component';
import { LineComponent } from './shapes/line/line.component';
import { TriangleComponent } from './shapes/triangle/triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShapesComponent,
    CircleComponent,RectangleComponent, LineComponent, TriangleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ShapesComponent },
      { path: 'shapes', component: ShapesComponent },
      { path: 'circle', component: CircleComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'line', component: LineComponent },
      { path: 'triangle', component: TriangleComponent }
     
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
