import {Routes, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Test  from './pages/TestPages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="test" element={<Test/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
