import React, { useState } from 'react';
import Styles from './Styles.module.scss';
import NoteList from './Components/NoteList';
import Content from './Components/Content';
import NoteContext from './NoteContext'
function App() {
	const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('myNotes')))
	const [currentNote, setCurrent] = useState(localStorage.getItem('currentNote'))
	return (
		<div className={Styles.App}>
			<NoteContext.Provider 
				value={{
					notes: notes, 
					setNotes: setNotes,
					currentNote: currentNote,
					setCurrent: setCurrent
				}}>
				<NoteList />
				<Content />
			</NoteContext.Provider>
		</div>
	);
}

export default App;
