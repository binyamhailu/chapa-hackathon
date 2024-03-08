import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto, CreateShareSessionDto } from './dto/create-share-session.dto';
import { UpdateShareSessionDto } from './dto/update-share-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShareSession } from './entities/share-session.entity';
import { User } from 'src/users/entities/user.entity';
import { Ownership } from 'src/ownsership/entities/ownsership.entity';
import { Company } from 'src/companies/entities/company.entity';

@Injectable()
export class ShareSessionService {

  constructor(
    @InjectRepository(ShareSession)
    private readonly shareSessionRepository: Repository<ShareSession>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Ownership)
    private ownershipRepository: Repository<Ownership>,
  ) { }

  async createSession(createSessionDto: CreateSessionDto) {
    const { company_id, user_id, share_no, share_value } = createSessionDto;
    const ref_id = await this.generateRefId(10); // Implement your logic to generate ref_id
    const session = await this.shareSessionRepository.save({
      company_id,
      user_id,
      share_no,
      share_value,
      status: 'pending',
      ref_id,
    });
    return {
      "status": true,
      "message": `session Fetch Sucessfully`,
      "data": session,
    };
  }

  async successSession(ref_id: string) {
    const session = await this.shareSessionRepository.findOne({ where: { ref_id } });
    if (!session) {
      return {
        "status": false,
        "message": `User Not Found By #Refid${ref_id}`,
        "data": null,
      }
    }
    session.status = 'success';
    const updatesSession = await this.shareSessionRepository.save(session);
    // const user = await this.userRepository.findOne({
    //  where: {
    //   id:updatesSession.user_id
    //  } 
    // });

    // const company = await this.companyRepository.findOne({
    //   where: {
    //    id:updatesSession.company_id
    //   } 
    //  });

    // company.avlShares=company.avlShares - updatesSession.share_no 
    // await this.companyRepository.save(company);

    // await this.ownershipRepository.save({ sharesOwned: updatesSession.share_no, user: user, company: company });

    return {
      "status": true,
      "message": `session Fetch Sucessfully`,
      "data": updatesSession,
    };
  }

  private async generateRefId(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  create(createShareSessionDto: CreateShareSessionDto) {
    return 'This action adds a new shareSession';
  }

  findAll() {
    return `This action returns all shareSession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shareSession`;
  }

  update(id: number, updateShareSessionDto: UpdateShareSessionDto) {
    return `This action updates a #${id} shareSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} shareSession`;
  }
}
