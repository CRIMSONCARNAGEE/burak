import { T } from "../libs/types/common"
import express, { Request, Response } from "express";
import MemberService from "../models/Member.service"
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enam";

const restaurantController:T = {}
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log('Home page');
    res.send('Home Page')
  }catch (err) {
    console.log('ERROR goHome:', err);
  }
}

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log('Login page');
    res.send('Login Page')
  }catch (err) {
    console.log('ERROR getLogin:', err);
  }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    console.log('Signup page');
    res.send('Signup Page')
  }catch (err) {
    console.log('ERROR getSignup:', err);
  }
}

restaurantController.processSignUp = async (req: Request, res: Response) => {
  try {
    console.log('processSignUp');
    console.log('body:', req.body);

    const newMember: MemberInput = req.body;
    newMember.MemberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignUp(newMember)

    res.send(result)
  }catch (err) {
    console.log('ERROR processSignUp:', err);
        res.send(err)
  }
}

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log('processLogin');
    res.send("Done");
  }catch (err) {
    console.log('ERROR processLogin:', err);
  }
}


export default restaurantController;