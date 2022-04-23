import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INote} from "../../models/INote";

interface NoteState {
    notes: INote[]
    active: boolean
    editId: number | null
}

const initialState: NoteState = {
    notes: [],
    active: true,
    editId: null
}
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<INote>){
            const noteIndex = state.notes.findIndex(note => note.id ===  action.payload.id)
            if(noteIndex !== -1){
                state.notes[noteIndex] = action.payload
                return;
            }
            state.notes.push(action.payload)
        },
        deleteAll(state){
            state.notes = state.notes.filter(note => note.active !== state.active)
        },
        deleteOne(state, action: PayloadAction<number>){
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
        setIdEdit(state, action: PayloadAction<number | null>){
            state.editId = action.payload
        },
        changStatus(state){
            state.active = !state.active
        },
        changNoteStatus(state, action: PayloadAction<number>){
            state.notes.forEach(note => {
                if(note.id === action.payload){
                    note.active = !note.active
                }
            })
        }
    }
})

export default noteSlice.reducer;