import { addTask,getTask,deleteTask,updateTask} from "../controllers/TaskController.js";
import express from 'express';
import { body,validationResult } from "express-validator"; 

const TaskRouter=express.Router();
//middle ware 
const validateRequest = (req, res, next) => {
  const errors = validationResult(req); 
  if (!errors.isEmpty()) {                //check if there are errors
    return res.status(400).json({ errors: errors.array() });
  }
  next(); //if no errors,move to the controlle
};

//validation using express-validaor
TaskRouter.post('/add',
    [
        body("title").notEmpty().withMessage("title is required"),
        body("description").notEmpty().withMessage("description is required"),
        body("due_date").notEmpty().withMessage("due_date is required"),
        body("priority").notEmpty().withMessage("priority is required"),
       
    ],validateRequest,addTask);

TaskRouter.get('/mytasks',getTask);
TaskRouter.delete('/deletetask/:id',deleteTask);
TaskRouter.put('/update/:id',updateTask);

export default TaskRouter;
