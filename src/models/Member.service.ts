import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModule from "../schema/Member.module";
import Errors, { HttpCode, Messages } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enam";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModule
  }

    public async processSignUp( input: MemberInput ): Promise<Member> {
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


    public async processLogin(input: LoginInput): Promise<Member> {
      const member = await this.memberModel
      .findOne(
        { MemberNick: input.memberNick },
        { MemberNick: 1, MemberPassword: 1 }
        )
      .exec()
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Messages.NO_FOUND_NICK);

        const isMatch = input.memberPassword === member.MemberPassword;
        if (!isMatch) {
          throw new Errors(HttpCode.UNAUTHORIZED, Messages.WRONG_PASSWORD)
        }

        return await this.memberModel.findById(member._id).exec();
    }
}

export default MemberService;