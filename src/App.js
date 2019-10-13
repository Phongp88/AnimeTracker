import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="App">
        <Searchbar />
        <Card/>
      {/* <header className="App-header">
        <form action="/quotes" method="POST">
        <input type="text" placeholder="name" name="name"></input>
        <input type="text" placeholder="quote" name="quote"></input>
        <button type="submit">Submit</button>
        </form>
      </header> */}
    </div>
  );
}

export default App;
