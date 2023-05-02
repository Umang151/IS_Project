import './App.css';
import DrawerAppBar from './components/header';
import { LandingComp } from './components/landingComp';
import './style.scss'
import {
  BrowserRouter as Router, Routes,
  Route, Navigate,
} from "react-router-dom";
import { FormPage2 } from './components/page2';
import { Footer } from './components/footer';
import { FormPage3 } from './components/page3';


function App() {
  return (
    <>
      <DrawerAppBar />
      <LandingComp />
      <FormPage2 />
      <FormPage3 />
      <Footer />
      {/* <Router>
        <Routes>
          <Route exact path="/page2" component={FormPage2} />
        </Routes>
      </Router> */}

    </>
  );
}

export default App;
