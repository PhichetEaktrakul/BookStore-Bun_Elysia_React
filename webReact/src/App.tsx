import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Breadcrumb from './components/common/Breadcrumb';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:bookId" element={<Product />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App