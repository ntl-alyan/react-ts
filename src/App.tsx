import {Routes, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Products  from './pages/TestPages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="Products" element={<Products/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
