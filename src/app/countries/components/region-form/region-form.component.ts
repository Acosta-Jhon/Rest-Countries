import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent implements OnInit {
  name:string = ''

  @Output() sendName:EventEmitter<string> = new EventEmitter();

  constructor() { }

  searchNameRegion(){
    this.sendName.emit(this.name);
  }

  ngOnInit(): void {
  }

}
