import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestPageComponent } from "./pages/test-page/test-page.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
