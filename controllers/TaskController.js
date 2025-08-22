import Task from "../modules/Task.js";

//add task
export function addTask(req,res){
    if(req.user==null){
        res.status(401).json({message:"You must be logged in first"});
        return;
    }

const data = req.body;
data.email = req.user.email;

    const task = new Task(data);
    task.save()
    .then(()=>{
        res.status(201).json({message:"Task added successfully"});
    }).catch((err)=>{
        res.status(500).json({error:err});
            });
}

//get all tasks
export function getTask(req,res){
    if(req.user==null){
        res.status(401).json({message:"You must be logged in first"});
        return;
    }
    
    Task.find(
    { email: req.user.email}).then((tasks)=>{
        res.json(tasks);
    }).catch((err)=>{        
        console.error("Error fetching tasks:", err);
        res.status(500).json({error:err});
    });
}


//delete tasks

export function deleteTask(req,res){
    if(req.user==null){
        res.status(401).json({message:"You must be logged in first"});
        return;
    }
        Task.findByIdAndDelete(req.params.id)
        .then((tasks)=>{
            
            res.json({message:"Task deleted successfully"});
        }).catch((err)=>{
            res.status(500).json({error:err});
        });    
}

//update tasks
export function updateTask(req, res) {
    const id = req.params.id;

    if (!req.user) {
        return res.status(401).json({ message: "You must be logged in first" });
    }
    else{
        Task.findById(id)
            .then((task) => {
                if (!task) {
                    return res.status(404).json({ message: "task not found" });
                }
                
                Task.findByIdAndUpdate(
                    id,
                    { $set: req.body },
                    { new: true, runValidators: true } 
                )
                    .then((updatedTask) => {
                        res.json({ message: "Task updated successfully", task: updatedTask });
                    })
                    .catch((err) => {
                        res.status(500).json({ error: err.message });
                    });
            })
            .catch((err) => {
                res.status(500).json({ error: err.message });
            });
        }
}


        