import { T } from "../libs/types/common"
import express, { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService()
const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log('signup');
    // TODO: Tokens!
    const input: MemberInput = req.body,
    memberService = new MemberService(),
    result: Member = await memberService.signup(input)

    res.json({ member: result })
  }catch (err) {
    console.log('ERROR signup:', err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart)
    // res.json({  })
  }
}

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log('Login');
        // TODO: Tokens!
    const input: LoginInput = req.body,
    memberService = new MemberService(),
    result = await memberService.login(input);

    res.json({ member: result })
  }catch (err) {
    console.log('ERROR login:', err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart)
  }
}

export default memberController;