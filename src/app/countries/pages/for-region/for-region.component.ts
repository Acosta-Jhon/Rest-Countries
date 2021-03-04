import { Component, OnInit } from '@angular/core';
import { Region } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styleUrls: ['./for-region.component.scss']
})
export class ForRegionComponent implements OnInit {

  submitted: boolean = false;
  regions: Array<Region> = [];
  controlError: boolean = false;
  name: string = '';

  constructor(private _regionService: CountryService) { }

  searchRegion() {
    this.submitted = true;
    const region: any = {
      name: this.name
    }

    this._regionService.searchRegion(region.name).subscribe((res) => {
      this.regions = res;
      console.log(this.regions);
    },
      (err) => {
        this.controlError = true;
        this.regions = [];
        console.log(err);
      });
  }

  ngOnInit(): void {
  }

}
