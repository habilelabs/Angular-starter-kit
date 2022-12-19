import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularStarterKit';

  constructor(private router: Router) { }

  goTo(loc: any) {
    this.router.navigate([loc]);
  }
}
