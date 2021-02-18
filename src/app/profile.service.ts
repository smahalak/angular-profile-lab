import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: UserProfile = {
    name: "Steven",
    contact: "mahalak.steve@outlook.com",
    bio: "My bones are cold"
  }

  constructor() { }

  getUserProfile = (): UserProfile => {
    return this.user;
  }

  setUserProfile = (updatedUserProfile: UserProfile) => {
    this.user = updatedUserProfile;
  }
}
