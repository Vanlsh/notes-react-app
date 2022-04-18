import React from 'react';
import './SummeryBody.css';
import {useAppSelector} from "../../../hooks/redux";

interface ICounter {
    type: string;
    active: number;
    archive: number
}
const transformCategory = (category: string): string => {
    let newCategory = category[0].toUpperCase()
    for(let i = 1; i < category.length;i++ ){
        if(category[i] == category[i].toUpperCase()) newCategory += " "
        newCategory += category[i]
    }
    return newCategory;
}
const SummeryBody = () => {
    const {notes} = useAppSelector(state => state.noteReducer)
    const countCategoryStatus: ICounter[] = [
        {type: "task", active: 0, archive: 0},
        {type: "idea", active: 0, archive: 0},
        {type: "randomThought", active: 0, archive: 0},
    ]
    countCategoryStatus.forEach(category => {
        notes.forEach(note => {
            if(note.category === category.type){
                note.active ? category.active = category.active + 1 : category.archive = category.archive + 1
            }
        })
    })
    return (
        <div>
            {countCategoryStatus.map(counter => {
                const link = "./img/"+ counter.type + ".svg"
                return(
                    <div className="summary">
                        <div>
                            <img src={link} alt="task"/>
                        </div>
                        <div>{transformCategory(counter.type)}</div>
                        <div>{counter.active}</div>
                        <div>{counter.archive}</div>
                    </div>
                );
            })}
        </div>

    );
};

export default SummeryBody;