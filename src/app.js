import React, { useState, useEffect } from 'react'
import Notes from './Notes'

function App() {
    return(
        <div className="root-app">
            <h1>Note Manager</h1>
            <button className="new-note-button">New Note</button>
            <Notes />
        </div>
    )
}

export default App