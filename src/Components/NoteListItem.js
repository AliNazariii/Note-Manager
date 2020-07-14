import React from 'react';
import Styles from '../Styles.module.scss';

function NoteListItem(props) {
    return(
        <div className={Styles.NoteListItem} 
            onClick={() => {
                localStorage.setItem('currentNote', props.index)
        }}>
            <h5>{props.data.title}</h5>
        </div>
    )
}

export default NoteListItem;