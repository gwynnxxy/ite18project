import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home/homeindex";
import { Container } from 'reactstrap';
import Login from './components/Login/loginindex';
import Logout from './components/Logout/logoutindex';
import Registration from './components/Registration/registrationindex';
import { ToastContainer } from 'react-toastify';
import { Protector } from './helpers';

function App() {
  return (
  <Container>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Protector Component={Home} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  </Container>
  ); 
}

export default App;