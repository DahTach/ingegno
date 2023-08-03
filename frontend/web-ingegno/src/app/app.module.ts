import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ThreeComponent } from './pages/three/three.component';
import { CanvasBoxComponent } from './components/canvas-box/canvas-box.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, ThreeComponent, CanvasBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
