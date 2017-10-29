import React, { Component } from 'react';
import Note from './Note/Note'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [
        {id: 1, noteContent: "Note 1 here !"},
        {id: 2, noteContent: "Note 2 here !"}
      ],
    }
  }
  render() {
    return (
      <div className="noteWrapper">
        <div className="noteHeader">
          <div className="heading">Note App</div>
        </div>
        <div className="notesBody ">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent = {note.noteContent} noteId = {note.id} key={note.id}/>  
              )
            })
          }
        </div>
        <div className="notesFooter">
          footerwill go her
        </div>
      </div>
    );
  }
}

export default App;