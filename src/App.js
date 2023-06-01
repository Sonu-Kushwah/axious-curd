import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import User from './component/User';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/AddUser" element={<AddUser/>}></Route>
      <Route path="/EditUser/:id" element={<EditUser/>}></Route>
      <Route path="/User/:id" element={<User/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
