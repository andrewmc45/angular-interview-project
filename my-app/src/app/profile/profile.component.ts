import { Component, OnInit } from '@angular/core';
import { UserProfile, ProfileService } from '../profile/profile.service';  // Correct the path to your service if needed

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: UserProfile | undefined;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe(data => {
      this.userProfile = data;
    }, error => {
      console.error('Error fetching the user profile', error);
    });
  }
}
