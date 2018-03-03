import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-info',
  templateUrl: './module-info.component.html',
  styleUrls: ['./module-info.component.scss']
})
export class ModuleInfoComponent implements OnInit {
  public c_types = [ 'Upload File', 'Link', 'Record Video' ];
  
  constructor() { }

  ngOnInit() {
  }

}
