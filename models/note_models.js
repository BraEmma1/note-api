import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const noteSchema = new Schema({
    title: {
        type: String,
        unique:true,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['active', 'completed'],
        default: 'active'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

noteSchema.plugin(toJSON)


export const NoteModel = model('Note', noteSchema);