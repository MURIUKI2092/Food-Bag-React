import './App.css';
import './style.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from './components/footer';
import MainContainer from './containers/main';
import Buyers from './containers/landing';

function App() {
  return (
    <Router>
      <Navbar/>
      <MainContainer>
        <Buyers/>
      </MainContainer>
     
      
      <Footer/>
    </Router>
    
  );
}

export default App;
