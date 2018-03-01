import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})

export class NewCourseComponent implements OnInit {
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  public topics = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  constructor(private _formBuilder: FormBuilder,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSetInNamespace
        ( "action", sanitizer.bypassSecurityTrustResourceUrl("assets/svg-icons/svg-sprite-action.svg"));
        // this.newCourseForm();
   }

  ngOnInit() {
  }

  // private newCourseForm() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     titleCtrl: ['', Validators.required],
  //     subTitleCtrl: ['', Validators.required],
  //     topicCtrl: ['', Validators.required],
  //     tagsCtrl: ['', Validators.required],
  //     pricingCtrl: ['', Validators.required],
  //     langCtrl: ['', Validators.required],
  //     levelCtrl: ['', Validators.required],
  //     courseTitleCtrl: ['', Validators.required],
  //     goalCtrl: ['', Validators.required],
  //     benefitCtrl: ['', Validators.required]
  //   });
  // }

}
