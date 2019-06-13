import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ficbook';

  constructor(private authService: AuthService,
              private router: Router,) {
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token');
    if (potentialToken !== null) {
      this.authService.setToken(potentialToken);
    }
    const isAuthenticated = this.authService.isAuthenticated();
  }



  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
