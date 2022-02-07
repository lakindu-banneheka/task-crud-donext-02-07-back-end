const router = require("express").Router();
const { route } = require("express/lib/application");
const { redirect } = require("express/lib/response");
const { updateOne } = require("../modules/Task");
let Task = require("../modules/Task");



router.get('/gettasklist', async (req,res) => {                             // get all books
    Task.find()
    .exec((error,taskList) => {
        if(error) {
            return res.status(400).json({ error });
        }
        if(taskList){
            return res.status(200).json({ taskList });
        }});
});

router.post('/addtask', async (req,res) => {   
    const { task } = req.body;
    const newtask = new Task ({ task });                          // get all books
    const all = await newtask.save();
    res.json( all );
});


router.post('/edittask/:id', async (req,res) => {   
    let taskId = req.params.id;
    const { task } = req.body;
    const updated = await Task.findByIdAndUpdate(taskId, {task:task} );
    res.status(201).json(updated);
});


router.delete('/deletetask/:id', async (req,res) => {   
    let taskId = req.params.id;

    const deleted = await Task.findByIdAndDelete(taskId);
    res.status(204).json(deleted);
});

module.exports =  router;