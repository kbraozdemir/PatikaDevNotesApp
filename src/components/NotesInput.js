import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, setColor } from '../features/notesSlice';

const NotesInput = () => {
  const [noteText, setNoteText] = useState('');
  const selectedColor = useSelector((state) => state.notes.selectedColor);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (noteText.trim()) {
      dispatch(
        addNote({
          text: noteText,
          color: selectedColor,
          id: Date.now(),
        })
      );
      setNoteText(''); // Not eklenince alanı temizle
    }
  };

  const colors = ['pink', 'purple', ' yellow', 'blue', 'green'];

  return (
    <div className="note-input">
      <textarea
        placeholder="Enter your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <div className="color-picker">
        {colors.map((color) => (
          <span
            key={color}
            className={`color ${color} ${color === selectedColor ? 'selected' : ''}`}
            onClick={() => dispatch(setColor(color))}
          ></span>
        ))}
      </div>
      <button onClick={handleAddNote}>ADD</button>
    </div>
  );
};

export default NotesInput;
