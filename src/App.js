import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Signup from './components/Signup';
import RequireAuth from './components/Protected';
import Home from './components/Home';
import Logout from './components/Logout';
import Signin from './components/SignIn';
import HealthForm from './components/HealthForm';

function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/signup" element = {RequireAuth(Signup)}  />
      <Route path="/home" element = {<Home/>}  />
      <Route path="/logout" element = {<Logout/>}  />
      <Route path="/signin" element = {RequireAuth(Signin)}  />
      <Route path="/health-form" element = {<HealthForm/>}  />
    </Routes>
  </Router>
   </>
  );
}

export default App;
