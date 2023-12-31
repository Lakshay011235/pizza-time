import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Policy from './pages/Policy.js';
import Pagenotfound from './pages/Pagenotfound.js';
import DefaultLogin from './pages/Auth/DefaultLogin.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/policy' element={<Policy />}/>
        <Route path='/d_login' element={<DefaultLogin />}/>
        <Route path='*' element={<Pagenotfound />}/>
      </Routes>
    </>
  );
}

export default App;
