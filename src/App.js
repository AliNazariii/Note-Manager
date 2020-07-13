import React, { useState } from 'react';
import Styles from './Styles.module.scss';
import NoteList from './Components/NoteList';
import Content from './Components/Content';

function App() {
	const [data, setData] = useState()
	let savedData = localStorage.getItem('notes')
	if (savedData) {
		setData()
	}
	console.log(savedData)
	return (
		<div className={Styles.App}>
			<NoteList />
			<Content />
		</div>
	);
}

export default App;
