import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  name:string= '';

  @Output() sendName:EventEmitter<string> = new EventEmitter();

  constructor() { }

  searchNameCountry(){
    this.sendName.emit(this.name)
  }

  ngOnInit(): void {
  } 

}
