import React from 'react';
import "./notestab.css";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header-notes'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;