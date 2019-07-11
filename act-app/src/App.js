import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AppIntroduction from './components/AppIntroduction';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppIntroduction />
      <SearchBar />
    </div>
  );
}

export default App;
