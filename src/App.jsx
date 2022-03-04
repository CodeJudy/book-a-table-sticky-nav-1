// https://reactrouter.com/docs/en/v6/getting-started/tutorial
// https://www.npmjs.com/package/react-router-dom
// npm install react-router-dom@6 history@5

// import { Link } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Menu from './routes/Menu';
import Booking from './routes/Booking';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <img id='logo' src='./nypizzalogo.svg' alt="ny pizza logo" />
          <Nav />
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="booking" element={<Booking />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
