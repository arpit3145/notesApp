import mongoose from "mongoose";

const connectDB =async(MONGO_DB_URL)=>{
    try{
        const DB_OPTIONS = {
            dbName: "todo"
          }
      await mongoose.connect(MONGO_DB_URL,DB_OPTIONS)
        console.log('connected successfully...')
    }catch(error){
        console.log(error)
        process.exit(1)
        
    }
}
export default connectDB