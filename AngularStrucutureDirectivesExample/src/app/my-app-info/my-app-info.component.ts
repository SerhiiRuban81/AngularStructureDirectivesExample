import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-app-info',
  templateUrl: './my-app-info.component.html',
  styleUrls: ['./my-app-info.component.css']
})
export class MyAppInfoComponent implements OnInit {
  isNavy: boolean = true;
  isVerdanaFont: boolean = true;
  currentClasses = {
    verdanaFont: this.isVerdanaFont,
    "navy-color": this.isNavy
  }
  constructor() { }

  ngOnInit(): void {
  }

}
