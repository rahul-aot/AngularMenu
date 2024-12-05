import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideBarComponent } from "./left-side-bar/left-side-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularMenu';
}
