const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task : {
        type : String,
        required :true
    }
})

const Task =  mongoose.model("Task" , TaskSchema);

module.exports = Task;

