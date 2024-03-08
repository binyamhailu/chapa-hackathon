import { Module } from '@nestjs/common';
import { ShareSessionService } from './share-session.service';
import { ShareSessionController } from './share-session.controller';
import { ShareSession } from './entities/share-session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ownership } from 'src/ownsership/entities/ownsership.entity';
import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ShareSession,Ownership,User, Company,])],

  controllers: [ShareSessionController],
  providers: [ShareSessionService],
})
export class ShareSessionModule {}
