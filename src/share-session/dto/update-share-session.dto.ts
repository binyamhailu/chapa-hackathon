import { PartialType } from '@nestjs/mapped-types';
import { CreateShareSessionDto } from './create-share-session.dto';

export class UpdateShareSessionDto extends PartialType(CreateShareSessionDto) {}
