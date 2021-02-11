
import './App.css';
import React from 'react';
import Nav from './components/Nav'
import useDarkMode from './hooks/useDarkMode';
function App() {

  return (
    <div className="bg-white flex items-center justify-center min-h-screen dark:bg-gray-600">
      <Nav></Nav>
    <h1 className="text-blue-600 dark:text-white">React Dark Mode</h1>
    </div>  
  );
}

export default App;
