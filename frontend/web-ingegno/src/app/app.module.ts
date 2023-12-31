import { NgModule } from "@angular/core";
import { environment } from "src/environments/environment";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { CanvasBoxComponent } from "./components/logo-box/logo-box.component";
import { RoomComponent } from "./components/room/room.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MdbAccordionModule } from "mdb-angular-ui-kit/accordion";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { MdbCheckboxModule } from "mdb-angular-ui-kit/checkbox";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MdbModalModule } from "mdb-angular-ui-kit/modal";
import { MdbPopoverModule } from "mdb-angular-ui-kit/popover";
import { MdbRadioModule } from "mdb-angular-ui-kit/radio";
import { MdbRangeModule } from "mdb-angular-ui-kit/range";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { MdbScrollspyModule } from "mdb-angular-ui-kit/scrollspy";
import { MdbTabsModule } from "mdb-angular-ui-kit/tabs";
import { MdbTooltipModule } from "mdb-angular-ui-kit/tooltip";
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TeamComponent } from "./pages/team/team.component";
import { ProfileComponent } from "./components/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CanvasBoxComponent,
    RoomComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
