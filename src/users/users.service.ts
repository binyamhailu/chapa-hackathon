import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginDto, SignUpDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Company } from 'src/companies/entities/company.entity';
import { Ownership } from 'src/ownsership/entities/ownsership.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Ownership)
    private ownershipRepository: Repository<Ownership>,


  ) { }
  async create(createUserDto: CreateUserDto) {
    const user1 = await this.userRepository.save({ name: 'John Doe', phone: '123456789', pin: "1234" });
    const user2 = await this.userRepository.save({ name: 'Alice Smith', phone: '987654321', pin: "5678" });


    const company0 = await this.companyRepository.save({ name: 'Chapa SC.', avlShares: 500, pricePerShare: 1500, totalShares: 500 });
    const company1 = await this.companyRepository.save({ name: 'COOP Inc.', avlShares: 500, pricePerShare: 1500, totalShares: 500 });
    const company2 = await this.companyRepository.save({ name: 'Ethiopia AirLines', avlShares: 500, pricePerShare: 1800, totalShares: 500 });
    const company3 = await this.companyRepository.save({ name: 'Ethio Telecom', avlShares: 500, pricePerShare: 1900, totalShares: 500 });


    await this.ownershipRepository.save({ sharesOwned: 50, user: user1, company: company1 });

    company1.avlShares=company1.totalShares - 50
    const company12 = await this.companyRepository.save(company1);

    await this.ownershipRepository.save({ sharesOwned: 20, user: user2, company: company1 });

    company12.avlShares = company12.avlShares - 20

    await this.companyRepository.save(company12);

    return this.userRepository.find({

      relations: ['ownedShares', 'ownedShares.company']

    });
  }
  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { phone: loginDto.phone, pin: loginDto.pin }
    });

    if (!user) {
      return {
        status: false,
        message: `Incorrect Phone or Pin`,
        data: null,
      };
    }

    return {
      status: true,
      message: `User Login Successfully`,
      data: user,
    };
  }

  async signup(signUpDto: SignUpDto) {
    const user = await this.userRepository.findOne({
      where: { phone: signUpDto.phone }
    })
    if (!user) {
      const user = await this.userRepository.save(signUpDto)
      return {
        "status": true,
        "message": `user Created Successfully!`,
        "data": user,
      }
    }
    return {
      "status": false,
      "message": `user Already Exists !`,
      "data": null,
    }
  }

  findAll() {
    return `This action returns all users`;
  }
  async isExist(phone: string) {
    const user = await this.userRepository.findOne({
      where: { phone: phone },
    })
    if (!user) {
      return {
        "status": false,
        "message": `User Not Found By #Phone${phone}`,
        "data": null,
      }
    }
    return {
      "status": true,
      "message": `User Fetch Sucessfully`,
      "data": user,
    }
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      relations: ['ownedShares', 'ownedShares.company']
    });

    if (!user) {
      return {
        "status": false,
        "message": `User Not Found By #ID${id}`,
        "data": null,
      }
    }
    return    {
      status: true,
      message: `User Fetch Successfully`,
      data: user,
    };

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
