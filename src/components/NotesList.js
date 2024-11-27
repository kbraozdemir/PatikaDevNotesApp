import React from 'react';
import { useSelector } from 'react-redux';

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const filter = useSelector((state) => state.notes.filter);

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="notes-list">
      {filteredNotes.map((note) => (
        <div key={note.id} className="note" style={{ backgroundColor: note.color }}>
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
