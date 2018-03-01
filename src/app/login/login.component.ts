import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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

  ngOnInit() { }

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
    this.authenticationService.login(this.loginForm.value)
      .pipe(finalize(() => {
        this.loginForm.markAsPristine();
        this.isLoading = false;
      }))
      .subscribe(credentials => {
        log.debug(`${credentials.username} successfully logged in`);
        this.router.navigate(['/'], { replaceUrl: true });
      }, error => {
        this.showError = true;
        log.debug(`Login error: ${error}`);
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
