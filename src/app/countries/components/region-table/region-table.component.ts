import { Component, OnInit, Input } from '@angular/core';
import { Region } from '../../interfaces/region.interface';

@Component({
  selector: 'app-region-table',
  templateUrl: './region-table.component.html',
  styleUrls: ['./region-table.component.scss']
})
export class RegionTableComponent implements OnInit {

  @Input() regions: Array<Region> = [];
  @Input() submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
