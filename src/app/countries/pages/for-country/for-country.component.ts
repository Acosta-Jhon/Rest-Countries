import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  termino: string = '';

  constructor(private _countryService: CountryService) { }

  buscar() {
    this.submitted = true;
    const search: any = {
      termino: this.termino
    }
    this._countryService.searchCountry(search.termino).subscribe(res => {
      this.countries = res
    },
      err => {
        this.controlError = true;
        this.countries = [];
        //console.log(err)
      })
  }

  search(e:any){
    this.termino = e
    this.buscar()
  }
}
