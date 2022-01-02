import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  public spinnerDiameter: number = 200;
  public spinnerStroke: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
