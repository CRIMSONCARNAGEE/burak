import { LoginInput, MemberInput, Member } from "../libs/types/member";
import MemberModule from "../schema/Member.module";
import Errors, { HttpCode, Messages } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enam";
import * as bcrypt from "bcryptjs"
import { log } from "node:console";

class MemberService {
  processLogin(input: LoginInput) {
    throw new Error("Method not implemented.");
  }
  processSignUp(newMember: MemberInput) {
    throw new Error("Method not implemented.");
  }
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModule
    /* SPA */

  }
public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
  input.MemberPassword = await bcrypt.hash(input.MemberPassword, salt);

  try {
    const result = await this.memberModel.create(input);
    // Parolni qaytarib yubormaymiz
    result.MemberPassword = "";
    return result.toJSON();
  } catch (err:any) {
    console.log("Error model signup:", err);
    throw new Errors(HttpCode.BAD_REQUEST, Messages.USING_NICK_PHONE);
  }
}



  public async login(input: LoginInput): Promise<Member> {
    // TODO: consider member staus later
    const member = await this.memberModel
    .findOne(
      { MemberNick: input.MemberNick },
      { MemberNick: 1, MemberPassword: 1 }
    )
    .exec()
    if(!member) throw new Errors(HttpCode.NOT_FOUND, Messages.NO_FOUND_NICK);

    const isMatch = await bcrypt.compare(input.MemberPassword, member.MemberPassword)

    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Messages.WRONG_PASSWORD)
    }

    return await this.memberModel.findById(member._id).lean().exec();
  }
}
 /* SSR */

export default MemberService;