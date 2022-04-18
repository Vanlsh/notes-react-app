import React, {useEffect} from 'react';
import './App.css'
import {useAppDispatch} from "./hooks/redux";
import {noteSlice} from "./store/redusers/NoteSlice";
import InputForm from "./components/InputForm/InputForm";
import NoteList from "./components/ListOfNote/NoteList";
import SummeryTable from "./components/SummaryTabel/SummeryTable";


function App() {
    const dispatch = useAppDispatch()
    const {addNote} = noteSlice.actions
    const note = {id: 1, created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word",title: "ivan", active: true}
    const note2 = {id: 2, created: "Apr 07,2021" ,category: "task",content: "Hello Word",title: "ivan", active: false}
    const note3 = {id: 3, created: "Apr 07,2021" ,category: "idea",content: "Word 20/04/2022 20/04/2022",title: "ivan", active: true}
    const note4 = {id: 4, created: "Apr 07,2021" ,category: "task",content: "Hello Word",title: "ivan", active: false}
    useEffect(() => {
        dispatch(addNote(note))
        dispatch(addNote(note2))
        dispatch(addNote(note3))
        dispatch(addNote(note4))
    }, [])
  return (
    <div className="app">
      <NoteList/>
      <InputForm/>
      <SummeryTable/>
    </div>
  );
}
export default App;
