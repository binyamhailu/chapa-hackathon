import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnsershipDto } from './create-ownsership.dto';

export class UpdateOwnsershipDto extends PartialType(CreateOwnsershipDto) {}
