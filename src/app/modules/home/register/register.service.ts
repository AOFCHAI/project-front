import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const endpoint = environment.API_ENOPOINT;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // HttpClient API post() method => Create employee
  createCustomer(registerData: any): Observable<any> {
    return this.http.post<any>(endpoint + '/v1/Userdetail', JSON.stringify(registerData), httpOptions)
  }


}
