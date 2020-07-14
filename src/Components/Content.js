import React, { useState, useContext } from 'react';
import Styles from '../Styles.module.scss';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from 'reactstrap'
import NewNote from './NewNote'
import NoteContext from '../NoteContext';

function Content(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const noteContext = useContext(NoteContext)

    let text = null
    let title = null
    if (noteContext.currentNote >= 0) {
        title = noteContext.notes[noteContext.currentNote].title
        text = noteContext.notes[noteContext.currentNote].text
    }

    return(
        <div className={Styles.Content}>
            <NewNote toggleFunction={toggle} visibility={modal} />
            <div className={Styles.ContentHeader}>
                <Button color="info" 
                    onClick={toggle}
                    outline>   
                    <IoIosAddCircle size="2em" />
                </Button>
                <h5>{title}</h5>
                <Button color="info" outline
                    onClick={() => {
                        let tempNotes = noteContext.notes;
                        tempNotes.splice(noteContext.currentNote, 1)
                        noteContext.setNotes(tempNotes)
                        localStorage.setItem('myNotes', 
                            JSON.stringify(tempNotes))
                        noteContext.setCurrent(-1)
                        localStorage.setItem('currentNote', -1)
                    }}>   
                    <MdDelete size="2em" />
                </Button>
            </div>
            <div className={Styles.ContentText}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Content;