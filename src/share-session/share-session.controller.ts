import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShareSessionService } from './share-session.service';
import { CreateSessionDto, CreateShareSessionDto, SuccessSessionDto } from './dto/create-share-session.dto';
import { UpdateShareSessionDto } from './dto/update-share-session.dto';

@Controller('share-session')
export class ShareSessionController {
  constructor(private readonly shareSessionService: ShareSessionService) {}

  @Post()
  create(@Body() createShareSessionDto: CreateSessionDto) {
    return this.shareSessionService.createSession(createShareSessionDto);
  }

  
  @Post('success')
  async successSession(@Body() successSessionDto: SuccessSessionDto) {
    return this.shareSessionService.successSession(successSessionDto.ref_id);
  }
  @Get()
  findAll() {
    return this.shareSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shareSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShareSessionDto: UpdateShareSessionDto) {
    return this.shareSessionService.update(+id, updateShareSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shareSessionService.remove(+id);
  }
}
