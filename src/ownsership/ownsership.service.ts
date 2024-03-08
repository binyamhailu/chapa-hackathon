import { Injectable } from '@nestjs/common';
import { CreateOwnsershipDto } from './dto/create-ownsership.dto';
import { UpdateOwnsershipDto } from './dto/update-ownsership.dto';

@Injectable()
export class OwnsershipService {
  create(createOwnsershipDto: CreateOwnsershipDto) {
    return 'This action adds a new ownsership';
  }

  findAll() {
    return `This action returns all ownsership`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ownsership`;
  }

  update(id: number, updateOwnsershipDto: UpdateOwnsershipDto) {
    return `This action updates a #${id} ownsership`;
  }

  remove(id: number) {
    return `This action removes a #${id} ownsership`;
  }
}
