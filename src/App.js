import React, { useState } from 'react';
import Styles from './Styles.module.scss';
import NoteList from './Components/NoteList';
import Content from './Components/Content';
import NoteContext from './NoteContext'
function App() {
	if (localStorage.getItem('currentNote') === null) {
		localStorage.setItem('myNotes', JSON.stringify([
			{'title': 'a note for test', 'text': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
		]))
		localStorage.setItem('currentNote', 0)
	}
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
