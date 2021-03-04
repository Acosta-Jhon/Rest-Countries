import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface'
import { Capital } from '../interfaces/capital.interface';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private urlAPI = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  searchCountry(country: string): Observable<any> {
    const url = `${this.urlAPI}/name/${country}`;
    return this.http.get<Country[]>(url)
  }

  searchCapital(capital: string): Observable<any> {
    const url = `${this.urlAPI}/capital/${capital}`;
    return this.http.get<Capital[]>(url);
  }

  searchRegion(capital: string): Observable<any> {
    const url = `${this.urlAPI}/region/${capital}`
    return this.http.get<Region[]>(url);
  }
}
