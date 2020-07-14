import { createContext } from "react";

const NoteContext = createContext({
    notes: false,
    setNotes: () => {},
    currentNote: false,
    setCurrent: () => {}
});

export default NoteContext;