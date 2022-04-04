import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ParentLocation } from '../models/parent-location';

@Injectable({
  providedIn: 'root'
})
export class ParentLocationService {

  private apiUrl = 'http://localhost:8080/parent';

  constructor(
    private http: HttpClient
  ) { }

  get(){
    return this.http.get<ParentLocation[]>(this.apiUrl);
  }

  getById(id: number){
    return this.http.get<ParentLocation>(`${this.apiUrl}/${id}`);
  }

  create(data:any){
    return this.http.post<ParentLocation>(this.apiUrl, data);
  }

}
