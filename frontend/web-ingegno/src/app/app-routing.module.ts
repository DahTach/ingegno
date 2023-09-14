import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestPageComponent } from "./pages/test-page/test-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { RmBioComponent } from "./pages/rm-bio/rm-bio.component";

const routes: Routes = [{ path: "", component: RmBioComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
