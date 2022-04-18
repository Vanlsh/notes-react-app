import React, {useEffect, useState} from 'react';
import Select from "react-select";
import './inputForm.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {noteSlice} from "../../store/redusers/NoteSlice";

const options = [
    { value: 'idea', label: 'Idea' },
    { value: 'task', label: 'Task' },
    { value: 'randomThought', label: 'Random Thought' }
]

const InputForm  = ()  => {
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('idea')
    const [content, setContent] = useState<string>('')

    const dispatch = useAppDispatch()
    const {editId,notes} = useAppSelector(state => state.noteReducer)
    const {addNote, setIdEdit} = noteSlice.actions
    useEffect(() => {
        notes.forEach(note => {
            if(note.id === editId){
                setTitle(note.title)
                setCategory(note.category)
                setContent(note.content)
            }
        })
    },[editId])
    const getValue = () => {
        return category ? options.find(c => c.value === category)  : ''
    }
    const onChangeCategory = (newValue: any) => {
        setCategory(newValue.value)
    }
    const onAddNote = () => {
        let id: number | null = 0
        if(editId){
            id = editId
        } else {
            id = Math.floor(Math.random() * 1000000)
        }
        const dateCreated = new Date().toDateString().split(" ")
        const todayDate =  dateCreated[1] + " " + dateCreated[2] + "," + dateCreated[3]
        dispatch(addNote({id, title, created: todayDate, category, content, active: true}))
        setTitle("")
        setCategory("idea")
        setContent("")
    }
    const onEditNote = () => {
        onAddNote();
        dispatch(setIdEdit(null))
    }
    return (
        <div className="form-container">
            <div className="form2-container">
                <div>
                    {/*<label htmlFor="text-title">Title </label>*/}
                    <input value={title}
                           placeholder="Title"
                           onChange={(value) => setTitle(value.target.value)}
                           type="text" id="text-title"
                    />
                </div>
                <div className="dropdown">
                    <Select value={getValue()} options={options} onChange={onChangeCategory}/>
                </div>
            </div>
            <textarea name="text-content" placeholder="Content" id="text-content"
                      value={content}
                      onChange={(value) => setContent(value.target.value)}
            />
            <div className="btn-container">
                {editId ? "" : <div className="btn-add" onClick={onAddNote}>Create Note</div>}
                {editId ? <div className="btn-edit" onClick={onEditNote}>Edit</div> : ''}
            </div>
        </div>
    );
};

export default InputForm;