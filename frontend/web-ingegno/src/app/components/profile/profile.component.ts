import { Component, Input } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  @Input()
  mate: any;

  ngOnInit() {
    console.log(this.mate);
  }
}
