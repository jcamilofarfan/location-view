import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ChildrenLocation } from '../models/child-location';

@Injectable({
  providedIn: 'root'
})
export class ChildLocationService {

  private apiUrl = 'http://localhost:8080/child';

  constructor(
    private http: HttpClient
  ) { }

  get(){
    return this.http.get<ChildrenLocation[]>(this.apiUrl);
  }

  getById(id: number){
    return this.http.get<ChildrenLocation>(`${this.apiUrl}/${id}`);
  }

  create(data:any){
    return this.http.post<ChildrenLocation>(this.apiUrl, data);
  }

}
