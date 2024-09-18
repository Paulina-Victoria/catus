/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import { useState } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../components/Navbar/Navbar.jsx';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';

function App(){
    return (
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </BrowserRouter>
        </div>
    );
}

export default App;
