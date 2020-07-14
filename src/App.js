import React from 'react';
import Styles from './Styles.module.scss';
import NoteList from './Components/NoteList';
import Content from './Components/Content';
import NoteContext from './NoteContext'
function App() {
	return (
		<div className={Styles.App}>
			<NoteContext.Provider value={{notes: localStorage.getItem('myNotes'), currentNote: localStorage.getItem('currentNote')}}>
				<NoteList />
				<Content />
			</NoteContext.Provider>
		</div>
	);
}

export default App;
