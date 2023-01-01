import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navigation.component';
import Advertisement from './components/advertisement/advertisement.component';
import Signin from './components/signin/signin.component.jsx';
import SignInSide from './components/signin-template/signin.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Advertisement />} />
        <Route path="/signin" element={<SignInSide />}/>
      </Route>
    </Routes>
  );
}

export default App;
