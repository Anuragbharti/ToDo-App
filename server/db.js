const mongoose = require('mongoose');

module.exports = async () => {
    try{
        const connectionParams = {
            useNEwUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
            "mongodb://localhost:3000/todo-app",
            connectionParams
            );
        console.log("Connected to Database")
    }catch(error){
        console.log("Could not connect to database",error);
    }
}