import mongoose from "mongoose";

const Taskschema=mongoose.Schema(
    {

        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        due_date:{
            type:Date,
            required:true
        },
        priority:{
            type:String,
            required:true,
            enum:['High','Medium','Low'],
        },
        email:{
            type:String,
            required:true
        },
        isCompleted:{
            type:Boolean,
            default:false,
            required:true
        }
    }
)
const Task=mongoose.model('Task',Taskschema);
export default Task;
