import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
 
import {LoginContext}  from "@app/core";
const log = new Logger('Login');


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  showError: boolean = false;
  enableGoogle: boolean = false;
  enableFacebook: boolean = false;
  enableLinkedin: boolean = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private authenticationService: AuthenticationService,
              iconRegistry: MatIconRegistry, 
              sanitizer: DomSanitizer) {
                iconRegistry.addSvgIconSetInNamespace
        ( "action", sanitizer.bypassSecurityTrustResourceUrl("assets/svg-icons/svg-sprite-action.svg"));
    this.createForm();
  }

  ngOnInit() { 
    this.enableGoogle =  this.authenticationService.isSocialEnabled ("facebook");
    this.enableFacebook =  this.authenticationService.isSocialEnabled ("google");
    this.enableLinkedin =  this.authenticationService.isSocialEnabled ("linkedin");
  }

  facebookLink(e: any) { 
  }

  googleLink(e: any) { 
  }

  linkedinLink(e: any) { 
  }

  openSignUp() {
    this.router.navigate(['/signup'], { replaceUrl: true });
  }

  login() {
    this.router.navigate(['/course'], { replaceUrl: true });
    // this.isLoading = true;
    // let credentials = {
    //   username: this.loginForm.controls.username.value,
    //   password: this.loginForm.controls.password.value 
    // }; 
    // this.authenticationService.login(credentials)
    //   .pipe(finalize(() => {
    //     this.loginForm.markAsPristine();
    //     this.isLoading = false;
    //   }))
    //   .subscribe(res => {
    //     //  console.log ("here is rescponse from login ", res);
    //       if (res.token){
    //         //it worked..
    //         this.authenticationService.updateAuthUser (res);
    //         this.router.navigate(['/'], { replaceUrl: true });
    //       }else{
    //         this.error = "Invalid credentials";
    //         this.showError = true;
    //       }
       
    //   }, error => {
    //     this.showError = true;
    //     console.log ("here is errr", error);
    //     this.error = error.error ? error.error.detail: ( error.message || "Invalid credentials");
    //   });
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

}