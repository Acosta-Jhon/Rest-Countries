import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  termino:string='';

  @Output() search = new EventEmitter<string>()

  constructor() { }

  buscar(){
    this.search.emit(this.termino)
  }

  ngOnInit(): void {
  }

}
