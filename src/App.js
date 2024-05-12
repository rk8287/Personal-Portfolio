import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <Router>

<Header/>
    <Routes>

<Route path={'/'} element={<Main/>}/>
<Route path={'/contact-us'} element={<Contact/>}/>


    </Routes>



    </Router>
  );
}

export default App;
