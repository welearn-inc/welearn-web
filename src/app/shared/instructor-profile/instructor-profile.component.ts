// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { finalize } from 'rxjs/operators';
// import { environment } from '@env/environment';
// import { Logger, I18nService, AuthenticationService } from '@app/core';
// import { MatIconRegistry } from '@angular/material';
// import { DomSanitizer } from '@angular/platform-browser';


// @Component({
//   selector: 'app-instructor-profile',
//   templateUrl: './instructor-profile.component.html',
//   styleUrls: ['./instructor-profile.component.scss']
// })
// export class InstructorProfileComponent implements OnInit {

//   // ProfileForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {

//     // this.createForm();
//   }

//   ngOnInit() {
//   }

//   // private createForm() {
//   //   this.ProfileForm = this.formBuilder.group({
//   //     // username: ['', Validators.required],
//   //     // password: ['', Validators.required],
//   //   });
//   // }


// }


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.scss']
})
export class InstructorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

