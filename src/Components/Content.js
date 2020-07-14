import React, { useState } from 'react';
import Styles from '../Styles.module.scss';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from 'reactstrap'
import NewNote from './NewNote'
import NoteContext from '../NoteContext';

function Content() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div className={Styles.Content}>
            <NewNote toggleFunction={toggle} visibility={modal} />
            <div className={Styles.ContentHeader}>
                {/* <NoteContext.Provider value={{notes: localStorage.getItem('myNotes')}}> */}
                    <Button color="info" 
                        onClick={toggle}
                        outline>   
                        <IoIosAddCircle size="2em" />
                    </Button>
                    <h5>Januaflmekameflakmwdmlwkfdmla</h5>
                    <Button color="info" outline>   
                        <MdDelete size="2em" />
                    </Button>
                {/* </NoteContext.Provider> */}
            </div>
            <div className={Styles.ContentText}>
                <NoteContext.Consumer>
                    {context =>
                        <p>{context.currentNote ? JSON.parse(context.notes)[context.currentNote].text : null}</p>
                    }
                </NoteContext.Consumer>
            </div>
        </div>
    )
}

export default Content;