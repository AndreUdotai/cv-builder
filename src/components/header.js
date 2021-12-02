import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <div className='row header py-3'>
            <div className='col-12 text-center'>
                <i className='fas fa-rocket fa-5x'></i>
                <h1>CV Builder App</h1>
            </div>
        </div>
    );
}

export default Header;
