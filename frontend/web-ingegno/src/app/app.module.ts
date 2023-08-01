import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ThreeTestingComponent } from "./components/three-testing/three-testing.component";
import { Scene } from "./components/three-scene/three-scene.component";
import { AccordionTestComponent } from "./components/accordion-test/accordion-test.component";
import { PageNavigationComponent } from "./components/page-navigation/page-navigation.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    NgbModule,
    ThreeTestingComponent,
    Scene,
    AccordionTestComponent,
    PageNavigationComponent,
    ThemeToggleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
