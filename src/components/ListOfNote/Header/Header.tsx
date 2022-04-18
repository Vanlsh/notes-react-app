import React from 'react';
import './Header.css'
import {useAppDispatch} from "../../../hooks/redux";
import {noteSlice} from '../../../store/redusers/NoteSlice'
const Header = () => {
    const dispatch = useAppDispatch()
    const {changStatus, deleteAll} = noteSlice.actions
    return (
        <div className="row-table">
            <div>Name</div>
            <div>Created</div>
            <div>Category</div>
            <div>Content</div>
            <div>Dates</div>
            <div>
                <img src="./img/file-zipper-solid.svg" alt="zipper" id="zipperAll"
                     onClick={() => dispatch(changStatus())}
                />
                <img src="./img/trash-solid.svg" alt="delete" id="deleteAll"
                     onClick={() => dispatch(deleteAll())}
                />
            </div>
        </div>
    );
};

export default Header;