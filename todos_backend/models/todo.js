const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos_v3", { useNewUrlParser: true });
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
    task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;