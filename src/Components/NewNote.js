import React from 'react';
import Styles from '../Styles.module.scss';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

function NewNote(props) {
    return(
        <Modal isOpen={props.visibility} toggle={props.toggleFunction}>
            <ModalHeader toggle={props.toggleFunction}>New Note</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggleFunction}>Cancel</Button>
                <Button color="primary" onClick={props.toggleFunction}>Submit</Button>
            </ModalFooter>
        </Modal>
    )
}

export default NewNote;