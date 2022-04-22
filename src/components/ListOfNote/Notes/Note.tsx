import React from 'react';
import './notes.css'
import {INote} from "../../../models/INote";
import {useAppDispatch} from "../../../hooks/redux";
import {noteSlice} from "../../../store/reduсers/NoteSlice";

interface IProps {
    note: INote;
    active: boolean
}
interface IDateAndContent {
    newContent: string;
    date: any;
}

const getDateFromContent = (content:string):IDateAndContent  => {
    const reg = /\d{2,4}[./-]\d{2}[./-]\d{2,4}/
    const newContent = content.split(reg).join("")
    const dateMatched = content.match(/\d{2,4}[./-]\d{2}[./-]\d{2,4}/g)
    const date = dateMatched ? (dateMatched.length >= 1 ? dateMatched.join(" ") : dateMatched): " "
    return {newContent, date}
}
const transformCategory = (category: string): string => {
    let newCategory = category[0].toUpperCase()
    for(let i = 1; i < category.length;i++ ){
        if(category[i] == category[i].toUpperCase()) newCategory += " "
        newCategory += category[i]
    }
    return newCategory;
}
const Note = (props: IProps)=> {
    const dispatch = useAppDispatch()
    const {changNoteStatus, deleteOne, setIdEdit} = noteSlice.actions
    const {note} = props;
    const zipperLink = note.active ? "./img/file-zipper-solid2.svg" : "./img/unArchive.svg"
    const {newContent, date} = getDateFromContent(note.content)

    return (
        <div className="added-notes">
            <div><img src={`./img/${note.category}.svg`} alt="category"/></div>
            <div>{note.title}</div>
            <div>{note.created}</div>
            <div>{transformCategory(note.category)}</div>
            <div>{newContent.length > 15 ? newContent.substring(0,15) + "..." : newContent}</div>
            <div>{date.length > 15 ? date.substring(0,20) + "..." : date}</div>
            <div>
                <img src="./img/pen-solid.svg" alt="edit" className="editOne"
                     onClick={() => dispatch(setIdEdit(note.id))}
                />
                <img src={zipperLink} alt="zipper" className="zipperOne"
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