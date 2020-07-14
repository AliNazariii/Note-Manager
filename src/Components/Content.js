import React, { useState } from 'react';
import Styles from '../Styles.module.scss';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from 'reactstrap'
import NewNote from './NewNote'
import NoteContext from '../NoteContext';

function Content(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div className={Styles.Content}>
            <NewNote toggleFunction={toggle} visibility={modal} />
            <NoteContext.Consumer>
                {context => (
                    <>
                        <div className={Styles.ContentHeader}>
                            <Button color="info" 
                                onClick={toggle}
                                outline>   
                                <IoIosAddCircle size="2em" />
                            </Button>
                            <h5>{context.currentNote !== false ? context.notes[context.currentNote].title : null}</h5>
                            <Button color="info" outline
                                onClick={() => {
                                    let tempNotes = context.notes;
                                    tempNotes.splice(context.currentNote, 1)
                                    context.setNotes(tempNotes)
                                    localStorage.setItem('myNotes', 
                                        JSON.stringify(tempNotes))
                                    context.setCurrent(false)
                                    localStorage.setItem('currentNote', false)
                                }}>   
                                <MdDelete size="2em" />
                            </Button>
                        </div>
                        <div className={Styles.ContentText}>
                            <p>{context.currentNote !== false ? context.notes[context.currentNote].text : null}</p>
                        </div>
                    </>
                )}
            </NoteContext.Consumer>                        
        </div>
    )
}

export default Content;