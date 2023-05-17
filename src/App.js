import React, { useState } from 'react';

import './App.css';

import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
 
  
  return (
    <div className='app'>
   <AddTask/>
   <ListTask/>
    </div>
  );
}

export default App;