import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import noteReducer from "./redusers/NoteSlice"

const rootReducer = combineReducers({
    noteReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AddDispatch = AppStore['dispatch']