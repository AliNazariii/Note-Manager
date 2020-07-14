import React from 'react';
import Styles from '../Styles.module.scss';
import NoteListItem from './NoteListItem';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import { BsSearch } from "react-icons/bs";
import NoteContext from '../NoteContext';

function NoteList(props) {
    // localStorage.setItem('myNotes', JSON.stringify([
    //     {'title': 'test1', 'text': 'text1'},
    //     {'title': 'test2', 'text': 'text2'}
    // ]))
    return(
        <div className={Styles.NoteList}>
            <InputGroup className={Styles.Search}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><BsSearch /></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" />
            </InputGroup>
            <hr className={Styles.hr} />
            <NoteContext.Consumer>
                {context => context.notes && context.notes.map((note, i) => (
                    <div key={i}>
                        <NoteListItem data={note} index={i} />
                        <hr className={Styles.hr} />    
                    </div>
                ))}
            </NoteContext.Consumer>
        </div>
    )
}

export default NoteList;