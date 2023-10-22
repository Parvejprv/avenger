const mongoose = require("mongoose");

// connect with server
mongoose.connect("mongodb://127.0.0.1:27017/task-manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//
// Goal : Mess around with promise chaining
//
// 1. Create promise chaining-2.js
// 2. Load in mongoose and task model
// 3. Remove a given task by id
// 4. Get and print the total number of incompleted task
// 5. Test your work