import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
import EventPage from '../src/app/Layout/EventPage';
import './App.css';

interface loading {
  setLoadig: boolean;
}

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner){
    setTimeout(() =>{
      spinner.style.display = "none";
      setLoading(false);
    },2000)
  }
  return (
    !loading && (
    <div className="w-full">
      <EventPage></EventPage>
    </div>
  )
  );
}

export default App
 