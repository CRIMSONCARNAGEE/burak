import { T } from "../libs/types/common"
import express, { Request, Response } from "express";
import MemberService from "../models/Member.service"

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

export default restaurantController;