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
          <Route path="/propertyPage">
            <Header />
            <PropertyPage />
          </Route>
          <Route path="/projectPage">
            <Header />
            <ProjectPage />
          </Route>
          <Route path="/questions">
            <Header />
            <FAQ />
          </Route>
          <Route path="/conditions">
            <Header />
            <Terms />
          </Route>
          <Route path="/contact">
            <Header />
            <ContactPage />
          </Route>
          <Route path="/residential">
            <Header />
            <Residential />
          </Route>
          <Route path="/administrative">
            <Header />
            <Administrative />
          </Route>
          <Route path="/commercial">
            <Header />
            <Commercial />
          </Route>
          <Route path="/clinics">
            <Header />
            <Clinics />
          </Route>
          <Route path="/pharmacies">
            <Header />
            <Pharmacies />
          </Route>
          <Route path="/dashboard">
            <Header />
            <DashBoard />
          </Route>
          <Route path="/projects">
              <Header />
              <Compounds />
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
