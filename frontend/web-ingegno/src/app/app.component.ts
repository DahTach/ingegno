import { Component, OnInit, Renderer2 } from "@angular/core";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "web-ingegno";

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.themeService.themeChanges().subscribe((theme) => {
      if (theme.oldValue) {
        this.renderer.setAttribute(
          document.body,
          "data-bs-theme",
          theme.oldValue,
        );
      }
      this.renderer.setAttribute(
        document.body,
        "data-bs-theme",
        theme.newValue,
      );
    });
  }
}
