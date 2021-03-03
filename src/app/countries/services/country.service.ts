import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private urlAPI = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  searchCountry(termino: string): Observable<any> {
    const url = `${this.urlAPI}/name/${termino}`
    return this.http.get<Country[]>(url)
  }
}
