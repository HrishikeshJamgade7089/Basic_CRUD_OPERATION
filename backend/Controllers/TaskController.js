const TaskModel = require('../models/TaskModel.js');

module.exports.getTasks = async(req,res)=>{
    const tasks = await TaskModel.find()
    res.send(tasks)
    
}

// module.exports.saveTasks = (req,res)=>{
//     const {task} = req.body

//     TaskModel.create({task}).then((data)=>{
//         console.log("Saved Successfully...");
//     }).catch((err)=>{
//         console.log(err);
//         res.send({error:err, message:"Something went wrong!"})
//     })
// }

module.exports.saveTasks = async(req,res)=>{
    try{
        const { task } = req.body
        const data = await TaskModel.create({task})
        console.log("Saved Successfully...");
        res.status(201).send(data);
    }
   
    catch(err){
        console.log(err);
        res.send({error:err, message:"Something went wrong! for save"});
    }
}

module.exports.updateTasks = async(req,res)=>{
    try{
        const {id} = req.params;
        const { task } = req.body;
        const data = await TaskModel.findByIdAndUpdate(id, {task})
        console.log("updated Successfully...");
        res.status(200).send(data);
    }
    
    catch(err){
        console.log(err);
        res.send({error:err, message:"Something went wrong! for update"});
    }
}

module.exports.deleteTasks = async(req,res)=>{
    try{
        const {id} = req.params;
        const data = await TaskModel.findByIdAndDelete(id)
        console.log("Deleted Successfully...");
        res.status(204).send(data);
    }
    
    catch(err){
        console.log(err);
        res.send({error:err, message:"Something went wrong! for delete"});
    }
}