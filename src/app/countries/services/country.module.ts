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
import { CapitalTableComponent } from '../components/capital-table/capital-table.component';
import { CapitalFormComponent } from '../components/capital-form/capital-form.component';
import { RegionFormComponent } from '../components/region-form/region-form.component';
import { RegionTableComponent } from '../components/region-table/region-table.component';


@NgModule({
  declarations: [
    ForCapitalComponent,
    ForRegionComponent,
    ShowCountryComponent,
    ForCountryComponent,
    CountryTableComponent,
    CountryFormComponent,
    CapitalTableComponent,
    CapitalFormComponent,
    RegionFormComponent,
    RegionTableComponent,
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
