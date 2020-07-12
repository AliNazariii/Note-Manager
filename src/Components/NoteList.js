import React from 'react';
import Styles from '../Styles.module.scss';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import { BsSearch } from "react-icons/bs";

function NoteList() {
    return(
        <div className={Styles.NoteList}>
            <InputGroup className={Styles.Search}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><BsSearch /></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" />
            </InputGroup>
        </div>
    )
}

export default NoteList;