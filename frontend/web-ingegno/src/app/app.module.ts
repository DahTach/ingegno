import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TestPageComponent } from "./pages/test-page/test-page.component";
import { CubeComponent } from "./components/cube/cube.component";
import { AppRoutingModule } from "./app-routing.module";
import { RmBioComponent } from "./pages/rm-bio/rm-bio.component";

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    TestPageComponent,
    RmBioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
