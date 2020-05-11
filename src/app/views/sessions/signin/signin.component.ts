import { hrayrDemoAnimations } from 'app/shared/animations/hrayrdemo-animations';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl, NgModel } from '@angular/forms';
import { JwtAuthService } from '../../../shared/services/auth/jwt-auth.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: hrayrDemoAnimations
})
export class SigninComponent implements OnInit {

  @ViewChild('submitButton') submitButton: NgModel;

  signinForm: FormGroup;
  errorMsg = '';
  return: string;
  loggedIn: boolean = false;
  signingIn: boolean = false;

    constructor(
    private jwtAuth: JwtAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {

    this.signinForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl(true)
    });
  }

 get email() {
    return this.signinForm.get('username');
  }

  get password(){
    return this.signinForm.get('password');
  }




  signin() {
    
    const signinData = this.signinForm.value

    this.signinForm.disable();
    this.errorMsg ="";

    this.signingIn = true;
   
    this.jwtAuth.signin(signinData.username, signinData.password)
    .subscribe(response => {
      setTimeout(() => {
        this.loggedIn = true;
        setTimeout(() => this.router.navigateByUrl('/'), 1000)
      },1000);
     
          
    }, err => {
      setTimeout(() => {
      this.signinForm.enable();
      if(err && err.error && err.error.message)
      this.errorMsg = err.error.message;
      this.signingIn = false;
    },1000);
    })
   
  }

}
