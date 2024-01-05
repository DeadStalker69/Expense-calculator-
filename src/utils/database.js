import mongoose from "mongoose";

export const connectToDB = async()=> {
    await mongoose.connect(process.env.MongoDB_URI)
    .then(()=> {
        console.log("App connected to database")
    })
    .catch((error)=> {
        console.log(error)
    })
}