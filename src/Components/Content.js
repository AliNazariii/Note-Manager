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
                                    context.setCurrent(false)
                                    localStorage.setItem('currentNote', false)
                                    context.setNotes(context.notes.splice(context.currentNote, 1))
                                    localStorage.setItem('myNotes', 
                                        JSON.stringify(context.notes.splice(context.currentNote, 1)))
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