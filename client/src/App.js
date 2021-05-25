import Navbar from './Components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './Components/Footer/index';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';

function App() {
  return (
    <>
    <Router>
  <Navbar/>
  <About/>
  <Contact/>
  <Services/>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
