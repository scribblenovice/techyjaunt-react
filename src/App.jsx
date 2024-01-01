import { useState } from 'react'
import './App.css'
import NavLinks from './globalcomponents/NavLinks'
import Homepage from './homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LaunchPad from './launchpad/Launchpad'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Homepage />}></Route>
        <Route path="/launchpad" element={<LaunchPad />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
