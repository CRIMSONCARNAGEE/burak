import { log } from "node:console";
import { MemberInput } from "../libs/types/member";
import MemberModule from "../schema/Member.module";
import Errors, { HttpCode, Messages } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enam";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModule
  }

    public async processSignUp( input: MemberInput ): Promise<string> {
      const exist = await this.memberModel
      .findOne( { memberType: MemberType.RESTAURANT } )
      .exec();
      console.log("exist:", exist);


      if(exist) throw new Errors(HttpCode.BAD_REQUEST, Messages.CREATE_FAILED);


      try {
      const result = await this.memberModel.create(input)
      result.MemberPassword = ""
      return result
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Messages.CREATE_FAILED);
    }
    }
}

export default MemberService;