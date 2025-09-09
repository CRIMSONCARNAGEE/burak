import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/* Restaurant */
routerAdmin.get('/', restaurantController.goHome);
routerAdmin
    .get('/login', restaurantController.getLogin)
    .post('/login', restaurantController.processLogin);
routerAdmin
  .get('/signup', restaurantController.getSignUp)
  .post('/signup', restaurantController.processSignUp);
  routerAdmin
    .get('/logout', restaurantController.logout)

  routerAdmin
    .get('/check-me', restaurantController.checkAuthSession)
/* Product */
/*User */
export default routerAdmin;
