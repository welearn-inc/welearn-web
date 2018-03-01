import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginContext }  from "@app/core";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  showError: boolean = false;
  isSignUp: boolean = true;

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
  }
  facebookLink(e: any) {
    console.log("facebook link");
  }

  googleLink(e: any) {
   console.log("gmail link");
  }

  linkedinLink(e: any) {
   console.log("linkedin link");
  }

  openSignUp() {
   this.isSignUp = true;
  }

  openSignIn() {
   this.isSignUp = false;
  }

  login() {
   this.isLoading = true;
   let credentials = {
     username: this.loginForm.controls.username.value,
     password: this.loginForm.controls.password.value 
   }; 
   this.authenticationService.login(credentials)
     .pipe(finalize(() => {
       this.loginForm.markAsPristine();
       this.isLoading = false;
     }))
     .subscribe(res => {
         console.log ("jere is rescponse from login ", res);
         if (res.token && res.user && res.user.pk){
           //it worked..
           this.authenticationService.updateAuthUser (res);
           this.router.navigate(['/'], { replaceUrl: true });
         }else{
           this.error = "Invalid credentials";
           this.showError = true;
         }
      
     }, error => {
       this.showError = true;
       
       this.error = error;
     });
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
