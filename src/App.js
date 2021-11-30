import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

export default App;
