import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    filter: '',
    selectedColor: 'pink',
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { addNote, setFilter, setColor } = notesSlice.actions;

export default notesSlice.reducer;
