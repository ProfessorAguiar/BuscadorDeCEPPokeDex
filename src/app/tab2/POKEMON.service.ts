import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class POKEMONService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}
  buscarPOKEMON(POKEMON: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${POKEMON}`);
  }
}