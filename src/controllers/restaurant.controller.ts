import { T } from "../libs/types/common"
import express, { Request, Response } from "express";

const restaurantController:T = {}
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send('Home Page')
  }catch (err) {
    console.log('ERROR goHome:', err);
  }
}

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send('Login Page')
  }catch (err) {
    console.log('ERROR getLogin:', err);
  }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    res.send('Signup Page')
  }catch (err) {
    console.log('ERROR getSignup:', err);
  }
}

export default restaurantController;