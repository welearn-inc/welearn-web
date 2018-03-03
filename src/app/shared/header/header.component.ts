import { Component, OnInit } from '@angular/core';

import { ObservableMedia } from '@angular/flex-layout';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private media: ObservableMedia, private router: Router) { }

  ngOnInit() {
  }


  isMobile(): boolean {
    console.log ("hre is mobile...");
    let ans =  this.media.isActive('xs') || this.media.isActive('sm');
    console.log ("here is answer for mobile ..", ans);
    return ans;
  }


  onCreateCourse (){
    this.router.navigate(['/course'], { replaceUrl: true });
  }

  goHome(){
    this.router.navigate(['/home'], { replaceUrl: true });
  }

}
