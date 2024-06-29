import { NoteModel } from "../models/note_models.js";


// add note to Database

export const addNote = async (req, res, next) => {
    try {
        const addData = await NoteModel.create(req.body)
        res.status(201).json(addData)
        console.log("Note Added")
    } catch (error) {
        next(error)
    }
}

//Get all Note  from Database
export const getNotes = async (req, res, next) => {
    try {
        const getData = await NoteModel.find();
        res.status(200).json(getData);
    } catch (error) {
        next(error)
    }
}

// Get a single Note from Database

export const getNote = async (req, res, next) => {
    try {
        const getsingleData = await NoteModel.findById(req.params.id);
        res.status(200).json(getsingleData);
    } catch (error) {
        next(error)
    }
}

// Get all active notes
export const getActiveNotes = async (req, res, next) => {
    try {
      const activeNotes = await NoteModel.find({ status: 'active' });
      res.status(200).json(activeNotes);
    } catch (error) {
      next(error);
    }
  };

  // Get all completed notes
export const getCompletedNotes = async (req, res, next) => {
    try {
      const completedNotes = await NoteModel.find({ status: 'completed' });
      res.status(200).json(completedNotes);
    } catch (error) {
      next(error);
    }
  };
  
// Updating a Note 

export const updateNote = async (req, res, next) => {
    try {
        const noteId = req.params.id;
        const updatedData = await NoteModel.findByIdAndUpdate({_id:noteId}, req.body,{new:true})
        console.log(updatedData);
        res.status(200).json(updatedData)
    
    }catch (error) {
        next(error)
    }
}
// delete a Note 

export const deleteNote = async (req, res, next) => {
    const deletedData = await NoteModel.findByIdAndDelete(req.params.id);
    res.status(200).json(` Note deleted` );
}
