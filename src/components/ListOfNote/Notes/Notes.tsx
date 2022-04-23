import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import Note from "./Note";

const Notes = () => {
    const {notes,active} = useAppSelector(state => state.noteReducer)
    return (
        <div>
            {notes.map(note => {
                return note.active === active ? <Note key={note.id} note={note}/> : ' '
            })}
        </div>
    );
};

export default Notes;