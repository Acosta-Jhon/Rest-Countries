import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styleUrls: ['./for-capital.component.scss']
})
export class ForCapitalComponent implements OnInit {

  submitted: boolean = false;
  capitals: Array<Capital> = [];
  controlError: boolean = false;
  name: string = '';

  constructor(private _capitalService: CountryService) { }

  search() {
    this.submitted = true;
    const capital: any = {
      name: this.name
    }
    this._capitalService.searchCapital(capital.name).subscribe(res => {
      this.capitals = res;
      console.log(this.capitals)
    },
      (err) => {
        this.controlError = true;
        this.capitals = []
        console.log(err);
      });
  }

  ngOnInit(): void {
  }

}
