import { hrayrDemoAnimations } from 'app/shared/animations/hrayrDemo-animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: hrayrDemoAnimations
})
export class SignupComponent implements OnInit {

  is_progress:boolean=false;
  errorMsg:string;
  return: string;
  signupForm: FormGroup;
  signupSuccess: boolean = false;
  loggedIn: boolean = false;
  constructor(private jwtAuth: JwtAuthService,private router: Router) {}

  ngOnInit() {
    const password = new FormControl('', Validators.required);
    const fullNamePattern = "[A-z]([-']?[A-z]+)*( [A-z]([-']?[A-z]+)*)";
    
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.pattern(fullNamePattern)]),
      password: password
    })
  }
  get email() {
    return this.signupForm.get('username');
  }

  get name() {
    return this.signupForm.get('name');
    
  }
  get password() {
    return this.signupForm.get('password');
  }

  signup() {

    this.signupForm.disable();
    const signupData = this.signupForm.value;
    const name=signupData.name.split(" ");
    const firstName=name[0];
    const lastName=name[1] || "";
    
    this.is_progress = true;
    this.errorMsg = "";
    const input={firstName:firstName,lastName:lastName,username:signupData.username,password:signupData.password};

    this.jwtAuth.signup(input)
    .subscribe(response => { 
      setTimeout(() => {
          this.signupSuccess = true;
        
          this.jwtAuth.signin(signupData.username, signupData.password)
        .subscribe(response => {
          setTimeout(() => {
          this.is_progress = false;
          this.loggedIn = true;

             setTimeout(() => this.router.navigateByUrl(this.return), 1000);

        },2000);
       
          
        }, err => {
          if(err && err.error && err.error.message)
          this.errorMsg = err.error.message;
        })
    },1000);
    }, err => {
      setTimeout(() => {
      if(err && err.error && err.error.message)
      this.errorMsg = err.error.message;
      this.is_progress = false;
      this.signupForm.enable();
    },1000);
    })

  }

}
