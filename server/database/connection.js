const mongoose = require('mongoose');

const connectDB = async() =>{

    try{

      const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

      console.log(`MongoDB connected: ${con.connection.host}`); 

    }catch(err){

        console.log(err);
        process.exit(1);
    }
}

const connectiDB = async() =>{

  try{

    const con = await mongoose.connecti(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  console.log(`MongoDB connected: ${con.connection.host}`);
}
  catch(err){
    console.log(err);
  }

}
module.exports =connectiDB
module.exports =connectDB