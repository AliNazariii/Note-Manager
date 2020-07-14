import React from 'react';
import Styles from '../Styles.module.scss';
import NoteContext from '../NoteContext';

function NoteListItem(props) {
    return(
        <NoteContext.Consumer>
            {context => (
                <div className={Styles.NoteListItem} 
                    onClick={() => {
                        context.setCurrent(props.index)
                        localStorage.setItem('currentNote', props.index)
                }}>
                    <h5>{props.data.title}</h5>
                </div>
            )}
        </NoteContext.Consumer>
    )
}

export default NoteListItem;