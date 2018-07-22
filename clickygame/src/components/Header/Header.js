import React from 'react';
import "./Header.css";

const Header = props => (
    <header className='header'>
        <h1>Clicky Game!</h1>
        <h2>
            Clicking on an image will earn you points, but you lose if you click the same image twice!
        </h2>
    </header>
);

export default Header;