import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get("./notes.json")
            .then(res => {
                setNotes(res.data)
            })
    };

    const onDelete = (number) => {
        let tempNotes = notes
        tempNotes.splice(number, 1);
        const fileData = JSON.stringify(tempNotes);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'delete.json';
        link.href = url;
        link.click();
    }

    const onEdit = (number) => {
        console.log("Todo")
    }

    return(
        <div className="main-layout">
            <div className="note-view">
                {notes.map((number) =>
                    <p className="note-detail" key={number}>{number.detail}</p> 
                )}
            </div>
            <div className="notes-list">
                {notes.map((note, i) =>
                    <div className="three-button-div">
                        <div className="notes-button" key={note}>{note.name}</div> 
                        <button onClick={() => onEdit(i)} className="edit-button" key={note}>Edit</button>
                        <button onClick={() => onDelete(i)} className="delete-button" key={note}>Delete</button>                            
                    </div>
                )}
            </div>
        </div>
    )
}

export default Notes