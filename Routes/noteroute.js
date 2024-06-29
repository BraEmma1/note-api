import { Router } from "express";
import { addNote, deleteNote, getNote, getNotes, updateNote,  } from "../controllers/note.js";

//create a router

const noteRouter = Router();

//define Routes

//Post a Note Route
noteRouter.post("/",addNote)

//Get All Notes Route 
noteRouter.get("/", getNotes)

//Get a single Note Route
noteRouter.get('/:id',getNote)

//Patch a Note Route
noteRouter.patch('/:id',updateNote)


//Delete a Note Route
noteRouter.delete('/:id',deleteNote)


// export the router

export default noteRouter;