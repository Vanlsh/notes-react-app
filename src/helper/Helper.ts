import {INote} from "../models/INote";
import notes from "../components/ListOfNote/Notes/Notes";
import {ICounter} from "../models/ICounter";

export default class Helper {
    static  transformCategory(category: string): string {
        let newCategory = category[0].toUpperCase()
        for(let i = 1; i < category.length;i++ ){
            if(category[i] == category[i].toUpperCase()) newCategory += " "
            newCategory += category[i]
        }
        return newCategory;
    }
    static getStats(notes: INote[]){
        const countCategoryStatus: ICounter[] = [
            {type: "task", active: 0, archive: 0},
            {type: "idea", active: 0, archive: 0},
            {type: "randomThought", active: 0, archive: 0},
        ]
        countCategoryStatus.forEach((category )=> {
            notes.forEach(note => {
                if(note.category === category.type){
                    note.active ? category.active = category.active + 1 : category.archive = category.archive + 1
                }
            })
        })
        return countCategoryStatus;
    }
}