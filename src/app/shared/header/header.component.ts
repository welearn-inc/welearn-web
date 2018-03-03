import { Component, OnInit } from '@angular/core';

import { ObservableMedia } from '@angular/flex-layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private media: ObservableMedia) { }

  ngOnInit() {
  }


  isMobile(): boolean {
    console.log ("hre is mobile...");
    let ans =  this.media.isActive('xs') || this.media.isActive('sm');
    console.log ("here is answer for mobile ..", ans);
    return ans;
  }


}
