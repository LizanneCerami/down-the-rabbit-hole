
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './scenes/Clock.jsx'
import RabbitHole from './scenes/RabbitHole.jsx'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={ <RabbitHole /> } Route />
        <Route path="clock" element=  { <Clock /> } Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
