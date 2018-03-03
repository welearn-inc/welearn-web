import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const logger = new Logger('Signup');

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  version: string = environment.version;
  error: string;
  signupForm: FormGroup;
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

   
  openSignIn() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  signup() {
    if (!this.signupForm.valid){
      return;
    }
    this.showError = false;
    let credential = {
      name: this.signupForm.controls.name.value,
      username: this.signupForm.controls.username.value,
      password1: this.signupForm.controls.password.value,
      password2: this.signupForm.controls.confirmpassword.value
    };

    
    if (credential.password1 != credential.password2 ){
      this.showError = true;
      this.error = "passwords do not match";
      return;
    }

    if (!this.authenticationService.isValidEmail (credential.username)){
      this.showError = true;
      this.error = "Invalid email";
      return;
    }

    this.isLoading = true;

    this.authenticationService.register (credential)
      .pipe(finalize(() => {
        this.signupForm.markAsPristine();
        this.isLoading = false;
      }))
      .subscribe(credentials => {
        console.log ("Signup response" , credentials);
        logger.debug(`${credentials.username} successfully logged in`);
        this.router.navigate(['/'], { replaceUrl: true });
      }, error => {
        this.showError = true;
        logger.debug(`Login error: ${error}`);
        this.error = error.error ? error.error.detail:  error.message;
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
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]  
    });
  }

}
