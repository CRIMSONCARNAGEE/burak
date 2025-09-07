import { T } from "../libs/types/common"
import express, { Request, Response } from "express";
import MemberService from "../models/Member.service"
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enam";
import { send } from "process";


const memberService = new MemberService();
const restaurantController:T = {}
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log('Home page');
    res.render('home')
  }catch (err) {
    console.log('ERROR goHome:', err);
  }
}

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log('Login page');
    res.render('login')
  }catch (err) {
    console.log('ERROR getLogin:', err);
  }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    console.log('Signup page');
    res.render('signup')
  }catch (err) {
    console.log('ERROR getSignup:', err);
  }
}

restaurantController.processSignUp = async (req: AdminRequest, res: Response) => {
  try {
    console.log('processSignUp');
    console.log('body:', req.body);

    const newMember: MemberInput = req.body;
    newMember.MemberType = MemberType.RESTAURANT;

    const result = await memberService.signup(newMember)
    // TODO SESSION authection
    req.session.member = result;
    req.session.save(function() {
      res.send(result)
    })



  }catch (err) {
    console.log('ERROR processSignUp:', err);
    res.send(err)
  }
}

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log('processLogin');
    console.log("body:", req.body );

    const input: LoginInput = req.body;
    const result = await memberService.login(input);
    // TODO SESSION authection
    req.session.member = result;
    req.session.save(function() {
      res.send(result)
    })

  }catch (err) {
    console.log('ERROR processLogin:', err);
    res.send(err)
  }
}


export default restaurantController;