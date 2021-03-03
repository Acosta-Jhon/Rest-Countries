import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from 'src/app/countries/pages/for-capital/for-capital.component';
import { ForRegionComponent } from 'src/app/countries/pages/for-region/for-region.component';
import { ShowCountryComponent } from 'src/app/countries/pages/show-country/show-country.component';
import { ForCountryComponent } from '../pages/for-country/for-country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryTableComponent } from '../components/country-table/country-table.component';
import { CountryFormComponent } from '../components/country-form/country-form.component';


@NgModule({
  declarations: [
    ForCapitalComponent,
    ForRegionComponent,
    ShowCountryComponent,
    ForCountryComponent,
    CountryTableComponent,
    CountryFormComponent,
  ],
  exports: [
    ForCapitalComponent,
    ForRegionComponent,
    ShowCountryComponent,
    ForCountryComponent,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule //NgModel
  ]
})
export class CountryModule { }
