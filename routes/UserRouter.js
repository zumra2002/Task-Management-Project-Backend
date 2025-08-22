import { AddUser,LoginUser,editUser } from "../controllers/UserController.js";
import express from 'express';
import { body,validationResult } from "express-validator"; 

const userRouter = express.Router();

//middle ware 
const validateRequest = (req, res, next) => {
  const errors = validationResult(req); 
  if (!errors.isEmpty()) {                //check if there are errors
    return res.status(400).json({ errors: errors.array() });
  }
  next(); //if no errors,move to the controller
};

//validation using express-validaor
userRouter.post('/register',[
    body("firstname").notEmpty().withMessage("First name is required"),
    body("lastname").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  validateRequest, AddUser);


userRouter.post('/login',
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
   validateRequest,LoginUser);


userRouter.put('/update/:id',editUser)

export default userRouter;