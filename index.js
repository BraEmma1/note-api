import express from "express";
import 'dotenv/config'
import noteRouter from "./Routes/noteroute.js";
import { dbConnection } from "./config/notedb.js";


//create App
const App = express();

dbConnection()
//middleware 
App.use(express.json())

//use the router
App.use(noteRouter)


//start server
const port =3000
App.listen(port, () =>{
 console.log(`Server is listening on Port ${port}`)
});