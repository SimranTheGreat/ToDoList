import Home from './Pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import AddTaskHome from './Pages/AddTaskHome';
import EditTaskHome from './Pages/EditTaskHome';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-task" element={<AddTaskHome />} />
        <Route path="/edit" element={<AddTaskHome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
