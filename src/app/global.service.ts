import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  api = 'https://fame-api.herokuapp.com/';

  constructor(private http: HttpClient) {}
}
