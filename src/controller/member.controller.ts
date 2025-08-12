import { T } from "../libs/common"
import express, { Request, Response } from "express";

const membercontroller:T = {}
membercontroller.goHome = (req: Request, res: Response) => {
  try {
    res.send('Home Page')
  }catch (err) {
    console.log('ERROR goHome:', err);
  }
}

membercontroller.getLogin = (req: Request, res: Response) => {
  try {
    res.send('Login Page')
  }catch (err) {
    console.log('ERROR getLogin:', err);
  }
}

membercontroller.getSignUp = (req: Request, res: Response) => {
  try {
    res.send('Signup Page')
  }catch (err) {
    console.log('ERROR getSignup:', err);
  }
}

export default membercontroller;