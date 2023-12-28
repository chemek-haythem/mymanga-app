import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './modules/Home/Home';
import Login from './modules/Login/Login';
import About from './modules/About/About';
import Basket from './modules/Basket/Basket';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>My Manga Store</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="Login">Login</NavLink>
          <NavLink to="Basket">Basket</NavLink>
          <NavLink to="About">About</NavLink>
          
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Basket' element={<Basket />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
