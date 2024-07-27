import express, {Request , Response} from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>{console.log("Connected to database")})

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// when these api gets hit , it will redirect to the myUserRoute
// and if the request is post request then it will pass to the MyController which will serve the request using its createCurrentUser method 

// app.use('api/my/user',myUserRoute) => This will not work because "/" is not there in beginning

app.use('/api/my/user',myUserRoute)
// I wan r to make github contribution
app.listen(7000,()=>{
    console.log("Server is started successfully");
})