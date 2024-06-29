import { Router } from "express";
import { addNote, deleteNote, getActiveNotes, getCompletedNotes, getNote, getNotes, updateNote,  } from "../controllers/note.js";

//create a router

const noteRouter = Router();

//define Routes

//Post a Note Route
noteRouter.post("/notes",addNote)

//Get All Notes Route 
noteRouter.get("/notes", getNotes)

//Get a single Note Route
noteRouter.get('/notes/:id',getNote)

//Get All active Notes
noteRouter.get('/active', getActiveNotes)

//Get All completed Notes
noteRouter.get('/completed', getCompletedNotes)

//Patch a Note Route
noteRouter.patch('/notes/:id',updateNote)


//Delete a Note Route
noteRouter.delete('/notes/:id',deleteNote)


// export the router

export default noteRouter;