import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
Url = 'http://localhost:5000';
  constructor(private http : HttpClient) { }

  getUser(){
   return this.http.get(this.Url);
  }
}
