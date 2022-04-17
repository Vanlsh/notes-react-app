import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INote} from "../../models/INote";

interface NoteState {
    notes: INote[]
    active: boolean
}

const initialState: NoteState = {
    notes: [],
    active: true,
}
export const userSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<INote>){
            state.notes.push(action.payload)
        }
    }
})

export default userSlice.reducer;