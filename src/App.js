// ./src/App.js

import './App.css';
import Food from './components/Food';
import Main from './components/Main';
import Menu from './components/Menu';
import CatsState from './context/Cats/CatsState';
import DogsState from './context/Dogs/DogsState';


function App() {
  return (
    <> 
    <CatsState>
      <DogsState>
          <Main />
          <Menu />
          <Food />
      </DogsState>
    </CatsState>


    </>
  );
}

export default App;