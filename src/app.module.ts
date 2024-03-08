import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { OwnsershipModule } from './ownsership/ownsership.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Ownership } from './ownsership/entities/ownsership.entity';
import { Company } from './companies/entities/company.entity';
import { ShareSessionModule } from './share-session/share-session.module';
import { ShareSession } from './share-session/entities/share-session.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({

        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        database: configService.get<string>('POSTGRES_DB'),
        // host: "10.3.141.204",
        // port: 5432,
        // database: "mpesa_vybe",
        username:configService.get<string>('POSTGRES_USER'),
        password:configService.get<string>('POSTGRES_PASSWORD'),
        entities: [User,Ownership,Company,ShareSession],
        synchronize: true,
      }),
    }),
    UsersModule, CompaniesModule, OwnsershipModule, ShareSessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
