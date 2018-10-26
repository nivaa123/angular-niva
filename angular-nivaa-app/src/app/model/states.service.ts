import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Istate } from './istate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  url = 'http://localhost:3000/cities';



  constructor(private http: HttpClient) { }

  getStates(): Observable<Istate[]> {
    return this.http.get<Istate[]>(this.url);

  }
 
}
