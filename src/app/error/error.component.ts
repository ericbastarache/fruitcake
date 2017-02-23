import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: []
})
export class ErrorComponent implements OnInit {
  error = "The page you requested is on another planet";
  constructor() { }

  ngOnInit() {
  }

}
