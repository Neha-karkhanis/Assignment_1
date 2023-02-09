import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import NavBar from './components/NavBar';
import VolunteerRegistration from './Pages/Volunteer';
import Home from './Home';

function App() {
  return (
    <>
      < BrowserRouter >
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<VolunteerRegistration />} />
      </Routes>
      </ BrowserRouter >
      </>
    
  );
}

export default App;
