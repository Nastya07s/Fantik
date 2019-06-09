import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });

    this.activeRoute.queryParams.subscribe((params: Params)=>{
      if(params['registered']){
        //
      } else if (params['accessDenied']){
        //
      }
    })
  }

  onSubmit(){
    this.form.disable();
    this.aSub = this.authService.login( this.form.value).subscribe(
      ()=> this.router.navigate(['/userpage']),
      error => {console.warn(error); this.form.enable()});
  }

  ngOnDestroy(): void {
    if(this.aSub)
    this.aSub.unsubscribe()
  }

}
