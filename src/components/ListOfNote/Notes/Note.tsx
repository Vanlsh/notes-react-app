import React from 'react';
import './notes.css'
import {INote} from "../../../models/INote";
import {useAppDispatch} from "../../../hooks/redux";
import {noteSlice} from "../../../store/reduсers/NoteSlice";
import Helper from "../../../helper/Helper";

interface IProps {
    note: INote;
}

const Note = ({note}: IProps)=> {
    const dispatch = useAppDispatch()
    const {changNoteStatus, deleteOne, setIdEdit} = noteSlice.actions
    const {newContent, date} = Helper.getDateFromContent(note.content)

    return (
        <div className="added-notes">
            <div><img src={`./img/${note.category}.svg`} alt="category"/></div>
            <div>{note.title}</div>
            <div>{note.created}</div>
            <div>{Helper.transformCategory(note.category)}</div>
            <div>{newContent.length > 15 ? newContent.substring(0,15) + "..." : newContent}</div>
            <div>{date.length > 15 ? date.substring(0,20) + "..." : date}</div>
            <div>
                <img src="./img/pen-solid.svg" alt="edit" className="editOne"
                     onClick={() => dispatch(setIdEdit(note.id))}
                />
                <img src={note.active ? "./img/file-zipper-solid2.svg" : "./img/unArchive.svg"}
                     alt="zipper" className="zipperOne"
                     onClick={() => dispatch(changNoteStatus(note.id))}
                />
                <img src="./img/trash-solid2.svg" alt="delete" className="delete"
                     onClick={() => dispatch(deleteOne(note.id))}
                />
            </div>
        </div>
    );
};

export default Note;