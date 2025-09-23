import express, { Request, Response } from "express";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";


const productService = new ProductService()

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render('products')
  }catch (err) {
    console.log('ERROR getAllProducts:', err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart)
    // res.json({  })
  }
}

productController.createNewProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.send('Done')
  }catch (err) {
    console.log('ERROR createNewProducts:', err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart)
    // res.json({  })
  }
}

productController.updateChoosenProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");

  }catch (err) {
    console.log('ERROR updateChoosenProducts:', err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart)
    // res.json({  })
  }
}

export default productController;