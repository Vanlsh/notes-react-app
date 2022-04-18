import React, {useEffect} from 'react';
import './App.css'
import {useAppDispatch} from "./hooks/redux";
import {noteSlice} from "./store/redusers/NoteSlice";
import InputForm from "./components/InputForm/InputForm";
import NoteList from "./components/ListOfNote/NoteList";
import SummeryTable from "./components/SummaryTabel/SummeryTable";

const defaultNotes = [
    {id: 1,title: "Monday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word",active: true },
    {id: 2,title: "Tuesday" ,created: "Apr 07,2022" ,category: "task",content: "Hello 20/04/2022 Word",active: true },
    {id: 3,title: "Wednesday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word", active: true},
    {id: 4,title: "Thursday" ,created: "Apr 07,2022" ,category: "randomThought",content: "Hello Word",active: true},
    {id: 5,title: "Friday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word",active: true},
    {id: 6,title: "Saturday" ,created: "Apr 07,2022" ,category: "task",content: "Hello Word", active: true},
    {id: 7,title: "Sunday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word", active: true},
]
function App() {
    const dispatch = useAppDispatch()
    const {addNote} = noteSlice.actions
    useEffect(() => {
        for (let i = 0;i < defaultNotes.length;i++){
            dispatch(addNote(defaultNotes[i]))
        }
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
