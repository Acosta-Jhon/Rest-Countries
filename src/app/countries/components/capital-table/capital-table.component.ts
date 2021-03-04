import { Component, OnInit, Input } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-capital-table',
  templateUrl: './capital-table.component.html',
  styleUrls: ['./capital-table.component.scss']
})
export class CapitalTableComponent implements OnInit {

  @Input() capitals:Array<Capital> = [];
  @Input() submitted:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
