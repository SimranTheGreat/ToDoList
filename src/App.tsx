import Home from './Pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AddEditHome from './Pages/AddEditHome';

export default function App() {
  return (
    <div className="outer">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-task" element={<AddEditHome />} />
          <Route path="/edit" element={<AddEditHome />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
