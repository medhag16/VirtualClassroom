import React from 'react';
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from './NotesList';
import Search from './Search';
import Header from './Header';
import "./notestab.css";

function NotesFeature() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note for Microsoft Engage!',
			date: '27/11/21',
		},
		
	]);

	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
        <div className={`${darkMode && 'dark-mode-notes'}`}>
			<div className='container-notes'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default NotesFeature;