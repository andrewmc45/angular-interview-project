import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registrationApi = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';

  constructor(private http: HttpClient) { }

  registerUser(): Observable<any> {
    return this.http.get(this.registrationApi);
  }
}
