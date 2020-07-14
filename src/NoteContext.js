import React, { createContext } from "react";

const NoteContext = createContext({
    notes: null,
    currentNote: null
});

export default NoteContext;