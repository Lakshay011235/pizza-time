// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Routes>
          {/* Default redirect to UserForm */}
          <Route path="/" element={<Home /> } />

          {/* Routes for different components */}
          {/* <Route path="/user-form" element={<UserForm />} />
          <Route path="/local-storage" element={<LocalStoragePage />} />
          <Route path="/firebase" element={<FirebasePage />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
