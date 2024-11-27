import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import NotesInput from './components/NotesInput';
import NotesList from './components/NotesList';
import './App.css';

const App = () => {
  return (
    <Provider store = {store}>
      <div className='app'>
        <Header/>
        <NotesInput/>
        <NotesList/>
      </div>
    </Provider>
  );
}

export default App;
