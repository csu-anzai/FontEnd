import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../model/user/user.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  ,'Access-Control-Allow-Origin': 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  register(data:IUser): Observable<any>{
    return this.http.post<any>(`${this.url}/register`, data, httpOptions);
  }
 
}
