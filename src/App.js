import React from 'react';
import Styles from './Styles.module.scss';
import NoteList from './Components/NoteList';
import Content from './Components/Content';

function App() {
	return (
		<div className={Styles.App}>
			<NoteList />
			<Content />
		</div>
	);
}

export default App;
