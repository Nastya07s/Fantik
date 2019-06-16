import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "./services/user.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ficbook';
  isAuthenticated: boolean;
  user: User;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token');
    if (potentialToken !== null) {
      this.authService.setToken(potentialToken);
    }
    this.userService.getUser().subscribe((user: User)=> this.user=user);
    this.isAuthenticated = this.authService.isAuthenticated();
  }



  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
