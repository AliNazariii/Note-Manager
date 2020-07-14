import React, { useState, useContext } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup } from 'reactstrap'
import NoteContext from '../NoteContext';

function NewNote(props) {
    const [note, setNote] = useState({
        title: null,
        text: null
    })

    const noteContext = useContext(NoteContext)

    const onSubmit = () => {
        noteContext.setNotes([...noteContext.notes, note])
        localStorage.setItem('myNotes', JSON.stringify([...noteContext.notes, note]))
    }

    const onChange = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }
    return(
        <Form onSubmit={onSubmit}>
            <Modal isOpen={props.visibility} toggle={props.toggleFunction}>
                <ModalHeader toggle={props.toggleFunction}>New Note</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Input onChange={onChange} style={{margin: "0 0 10px 0"}} type="text" name="title" placeholder="Title" />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={onChange} type="textarea" name="text" placeholder="Your Note Text" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.toggleFunction}>
                        Cancel
                    </Button>
                    <Button color="info" type="submit"
                        onClick={() => {
                            onSubmit()
                            props.toggleFunction()
                        }}>
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
        </Form>
    )
}

export default NewNote;