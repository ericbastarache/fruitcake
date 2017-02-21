import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: []
})
export class ErrorComponent implements OnInit {
  error = "Sorry the page you were looking for could not be found";
  constructor() { }

  ngOnInit() {
  }

}
