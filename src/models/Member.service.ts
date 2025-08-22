import { LoginInput, MemberInput, Member } from "../libs/types/member";
import MemberModule from "../schema/Member.module";
import Errors, { HttpCode, Messages } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enam";
import * as bcrypt from "bcryptjs"
import { log } from "node:console";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModule
  }
public async processSignUp(input: MemberInput): Promise<Member> {
  // Nick yoki telefon bo‘yicha tekshirish
  const exist = await this.memberModel.findOne({
    $or: [
      { MemberNick: input.MemberNick },
      { MemberPhone: input.MemberPhone }
    ]
  }).exec();

  if (exist) {
    throw new Errors(HttpCode.BAD_REQUEST, Messages.CREATE_FAILED);
  }

  // Parolni hash qilish
  const salt = await bcrypt.genSalt();
  input.MemberPassword = await bcrypt.hash(input.MemberPassword, salt);

  try {
    const result = await this.memberModel.create(input);
    // Parolni qaytarib yubormaymiz
    result.MemberPassword = "";
    return result;
  } catch (err:any) {
    console.log("error", err);

    throw new Errors(HttpCode.BAD_REQUEST, Messages.CREATE_FAILED);
  }
}



  public async processLogin(input: LoginInput): Promise<Member> {
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

    return await this.memberModel.findById(member._id).exec();
  }
}

export default MemberService;