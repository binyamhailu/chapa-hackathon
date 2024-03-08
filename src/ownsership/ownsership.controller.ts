import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnsershipService } from './ownsership.service';
import { CreateOwnsershipDto } from './dto/create-ownsership.dto';
import { UpdateOwnsershipDto } from './dto/update-ownsership.dto';

@Controller('ownsership')
export class OwnsershipController {
  constructor(private readonly ownsershipService: OwnsershipService) {}

  @Post()
  create(@Body() createOwnsershipDto: CreateOwnsershipDto) {
    return this.ownsershipService.create(createOwnsershipDto);
  }

  @Get()
  findAll() {
    return this.ownsershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownsershipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnsershipDto: UpdateOwnsershipDto) {
    return this.ownsershipService.update(+id, updateOwnsershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownsershipService.remove(+id);
  }
}
