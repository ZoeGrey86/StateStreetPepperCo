
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import {Home} from './components/pages/Home';
import { About } from './components/pages/About';
import { Products } from './components/pages/Products';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path='https://www.instagram.com/statestreetpepperco/'></Route>
      </Routes>
    </div>
  );
}

export default App;
