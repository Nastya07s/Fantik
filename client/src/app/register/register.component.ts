import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
// import {MustMatchDirective} from '../mustMatch';

import {MustMatch} from "../mustMatch";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,
        [Validators.required,Validators.minLength(1)]),
      confirmPassword: new FormControl(null,
        [Validators.required]),
    },{
      validator: MustMatch('password','confirmPassword')
    });
  }

  ngOnDestroy(): void {
    if(this.aSub)
      this.aSub.unsubscribe()
  }

  onSubmit() {
    // if (this.form.invalid) {
    //   return;
      // }
    this.form.disable();
    this.aSub = this.authService.register(this.form.value).subscribe(
      () => {
        this.router.navigate(['/login'],{
          queryParams:{
            registered: true
          }
        });
      },
      error => {
        alert(error.error.message);
        console.warn(error);
        this.form.enable();
      },);
  };
}


