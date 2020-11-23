import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-with-style',
  templateUrl: './work-with-style.component.html',
  styleUrls: ['./work-with-style.component.css']
})
export class WorkWithStyleComponent implements OnInit {
  styles = {

    color: "purple",
    "text-decoration": "underline",
    "font-weight": "bold"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
