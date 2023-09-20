import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Routing from './routes/index';

function App() {
  return (
    <div>
    <HashRouter>
    <Routing />
    </HashRouter>
    </div>
  );
}

export default App;
