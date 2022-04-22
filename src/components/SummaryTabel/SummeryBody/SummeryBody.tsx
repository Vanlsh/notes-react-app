import React from 'react';
import './SummeryBody.css';
import {useAppSelector} from "../../../hooks/redux";
import Helper from "../../../helper/Helper";
import {ICounter} from "../../../models/ICounter";


const SummeryBody = () => {
    const {notes} = useAppSelector(state => state.noteReducer)
    const stats: ICounter[] = Helper.getStats(notes)
    return (
        <div>
            {stats.map((counter, index) => {
                const link = "./img/"+ counter.type + ".svg"
                return(
                    <div className="summary" key={index}>
                        <div>
                            <img src={link} alt="task"/>
                        </div>
                        <div>{Helper.transformCategory(counter.type)}</div>
                        <div>{counter.active}</div>
                        <div>{counter.archive}</div>
                    </div>
                );
            })}
        </div>

    );
};

export default SummeryBody;