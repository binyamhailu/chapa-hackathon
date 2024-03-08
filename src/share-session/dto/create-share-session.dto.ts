export class CreateShareSessionDto {}
export class CreateSessionDto {
    company_id: number;
    user_id: number;
    share_no: number;
    share_value: number;
  }
  
  export class SuccessSessionDto {
    ref_id: string;
  }
   