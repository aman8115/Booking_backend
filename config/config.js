import mongoose from "mongoose";
import { config } from "dotenv";
config()
mongoose.set('strictQuery',false)
const database_connection = async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((connec)=>{
        console.log(` database has connected${connec.connection.host}`)
    })
    .catch((e)=>{
        console.log(` database cannot connect ${e}`)
        process.exit(1)
    })
}
export default database_connection;