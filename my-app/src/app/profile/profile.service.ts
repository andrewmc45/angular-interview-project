import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Introducing the UserProfile interface
export interface UserProfile {
  name: string;
  email: string;
  bio: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileApi = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';

  constructor(private http: HttpClient) { }

  // Specify that the return type is Observable<UserProfile>
  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.profileApi);
  }
}
