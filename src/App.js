import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cashier from './Pages/Cashier';
import Detail from './Pages/Detail';
import Signin from './Pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/cashier' element={<Cashier />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </Router> 
  )
}

export default App;
