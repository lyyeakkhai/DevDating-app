import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProfileDto } from './dto/profile-dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`,
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`,
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`,
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }
  createProfile(profile: ProfileDto) {
    const newProfile = { ...profile, id: randomUUID() };
    this.profiles.push(newProfile);
    return newProfile;
  }
  updateProfile(id: string, updateData: ProfileDto) {
    const profile = this.profiles.find((p) => p.id === id);
    if (!profile) {
      return {
        message: `Profile with ID ${id} not found`,
      };
    }
    const updateProfile = this.profiles.indexOf(profile);
    this.profiles[updateProfile] = { ...profile, ...updateData };
    return this.profiles[updateProfile];
  }

  deleteProfile(id: string) {
    const profileIndex = this.profiles.findIndex((p) => p.id === id);
    if (profileIndex === -1) {
      return {
        message: `Profile with ID ${id} not found`,
      };
    }
    this.profiles.splice(profileIndex, 1);
    return {
      message: `Profile with ID ${id} deleted successfully`,
    };
  }
}
