import { Module } from '@nestjs/common';
import { OwnsershipService } from './ownsership.service';
import { OwnsershipController } from './ownsership.controller';
import { Ownership } from './entities/ownsership.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ownership])],
  controllers: [OwnsershipController],
  providers: [OwnsershipService],
})
export class OwnsershipModule { }
