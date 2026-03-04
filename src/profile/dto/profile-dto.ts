import { UUID } from 'crypto';

export interface ProfileDto {
  id: UUID;
  name: string;
  description: string;
}
