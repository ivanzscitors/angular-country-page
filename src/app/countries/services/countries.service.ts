import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrlstring = 'https://restcountries.com/v3.1'
  constructor(private httpClient: HttpClient) {
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrlstring}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrlstring}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrlstring}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountryByAlphaCode(code: string):Observable<Country | null> {
    const url = `${this.apiUrlstring}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }

}
