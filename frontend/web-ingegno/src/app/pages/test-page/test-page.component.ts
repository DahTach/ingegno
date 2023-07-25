import { Component } from "@angular/core";
import { Scene } from "./scene.component";
import { NgtCanvas } from "angular-three";

@Component({
  selector: "app-test-page",
  templateUrl: "./test-page.component.html",
  styleUrls: ["./test-page.component.scss"],
  standalone: true,
  imports: [NgtCanvas],
})
export class TestPageComponent {
  readonly Scene = Scene;
}
