import React from 'react';
import Navbar from './components/Navbar';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';

import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteForm />
      <QuoteList />
    </div>
  );
}

export default App;
