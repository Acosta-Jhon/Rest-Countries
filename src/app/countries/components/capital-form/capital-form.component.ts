import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-capital-form',
  templateUrl: './capital-form.component.html',
  styleUrls: ['./capital-form.component.scss']
})
export class CapitalFormComponent implements OnInit {

  name:string= '';

  @Output() sendName:EventEmitter<string> = new EventEmitter();

  constructor() { }

  searchNameCapital(){
    this.sendName.emit(this.name)
  }

  ngOnInit(): void {
  }

}
