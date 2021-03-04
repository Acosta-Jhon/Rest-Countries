import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styleUrls: ['./for-country.component.scss']
})
export class ForCountryComponent {

  submitted = false;
  countries: Array<Country> = [];
  controlError: boolean = false
  name: string = '';

  constructor(private _countryService: CountryService) { }

  searchCountry(name:string) {
    this.submitted = true;
    this.name = name
    this._countryService.searchCountry(name).subscribe((res) => {
      this.countries = res;
    },
      (err) => {
        this.controlError = true;
        this.countries = [];
        console.log(err)
      })
  }
}
