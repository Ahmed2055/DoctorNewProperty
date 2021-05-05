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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ar/propertyPage">
            <Header />
            <PropertyPage />
          </Route>
          <Route path="/ar/projectPage">
            <Header />
            <ProjectPage />
          </Route>
          <Route path="/ar/questions">
            <Header />
            <FAQ />
          </Route>
          <Route path="/ar/conditions">
            <Header />
            <Terms />
          </Route>
          <Route path="/ar/contact">
            <Header />
            <ContactPage />
          </Route>
          <Route path="/ar/residential">
            <Header />
            <Residential />
          </Route>
          <Route path="/ar/administrative">
            <Header />
            <Administrative />
          </Route>
          <Route path="/ar/commercial">
            <Header />
            <Commercial />
          </Route>
          <Route path="/ar/clinics">
            <Header />
            <Clinics />
          </Route>
          <Route path="/ar/pharmacies">
            <Header />
            <Pharmacies />
          </Route>
          <Route path="/ar/dashboard">
            <Header />
            <DashBoard />
          </Route>
          <Route path="/ar/projects">
              <Header />
              <Compounds />
          </Route>
          <Route path="/ar/">
              <Header />
              <Home />
          </Route>
          <Route path="/">
              <Header />
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
