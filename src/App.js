import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/Header';
import Home from './screens/Home';
import Residential from './screens/Residential';
import ContactPage from './screens/ContactPage';
import Administrative from './screens/Administrative';
import Commercial from './screens/Commercial';
import Clinics from './screens/Clinics';
import Pharmacies from './screens/Pharmacies';
import PropertyPage from './screens/PropertyPage';
import FAQ from './screens/FAQ';
import Terms from './screens/Terms';
import DashBoard from './screens/DashBoard';
import Compounds from './screens/Projects';
import ProjectPage from './screens/ProjectPage';
import WhatsButton from './components/WhatsButton';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ar/propertyPage">
            <Header />
            <PropertyPage />
            <WhatsButton />
          </Route>
          <Route path="/ar/projectPage">
            <Header />
            <ProjectPage />
            <WhatsButton />
          </Route>
          <Route path="/ar/questions">
            <Header />
            <FAQ />
            <WhatsButton />
          </Route>
          <Route path="/ar/conditions">
            <Header />
            <Terms />
            <WhatsButton />
          </Route>
          <Route path="/ar/contact">
            <Header />
            <ContactPage />
            <WhatsButton />
          </Route>
          <Route path="/ar/residential">
            <Header />
            <Residential />
            <WhatsButton />
          </Route>
          <Route path="/ar/administrative">
            <Header />
            <Administrative />
            <WhatsButton />
          </Route>
          <Route path="/ar/commercial">
            <Header />
            <Commercial />
            
          </Route>
          <Route path="/ar/clinics">
            <Header />
            <Clinics />
            <WhatsButton />
          </Route>
          <Route path="/ar/pharmacies">
            <Header />
            <Pharmacies />
            <WhatsButton />
          </Route>
          <Route path="/ar/dashboard">
            <Header />
            <DashBoard />
            <WhatsButton />
          </Route>
          <Route path="/ar/projects">
              <Header />
              <Compounds />
              <WhatsButton />
          </Route>
          <Route path="/ar/">
              <Header />
              <Home />
              <WhatsButton />
          </Route>
          <Route path="/">
              <Header />
              <Home />
              <WhatsButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
