import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import type { ProfileDto } from './dto/profile-dto';
import { UpdateProfileDto } from './dto/updateProfile-dto';
import { ProfilesService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profilesService: ProfilesService) {}
  // GET /profiles
  // GET /profiles/:id
  // POST /profiles
  // PUT /profiles/:id
  // DELETE /profiles/:id
  @Get()
  getProfiles() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  getProfileById(@Param('id') id: string) {
    return this.profilesService.findOne(id);
  }

  @Post()
  create(@Body() profileDto: ProfileDto) {
    return this.profilesService.createProfile(profileDto);
  }

@Put(':id')
updateProfile( @Param('id') id: string,@Body() updateProfileDto: ProfileDto) {
    return this.profilesService.updateProfile(id, updateProfileDto);
  }

  @Delete(':id')deleteProfile(@Param('id') id: string) {
  deleteProfile(@Param('id') id: string) {
    return this.profilesService.deleteProfile(id);
  }
}
