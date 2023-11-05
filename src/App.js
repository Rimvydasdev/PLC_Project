import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './components/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
