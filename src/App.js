import logo from './logo.svg';
import './App.css';
import { Routes, Route,  NavLink} from 'react-router-dom';
import Home from './Home';
import Insights from './Insights';
import Personas from './Personas';
import Representations from './Representations';

function App() {
  return (
    <div>
      <div className = 'nav-bar'>
        <div className = 'left'>
         <NavLink to="/" > Refugee Advocates </NavLink>
        </div>
        <div className = 'right'>
          
          <div className = 'nav-element'><NavLink to="/personas" className = {({ isActive }) => isActive ? 'active' : ' '}> Personas </NavLink></div>
          <div className = 'nav-element'><NavLink to="/representations" className = {({ isActive }) => isActive ? 'active' : ' '}> Representations </NavLink></div>
          <div className = 'nav-element'><NavLink to="/insights" className = {({ isActive }) => isActive ? 'active' : ' '}> Insights </NavLink></div>

        </div>
      </div>
    <Routes>
      <Route exact path="/insights" element={<Insights />}>
      </Route>
      <Route exact path="/representations" element={<Representations />}>
      </Route>
      <Route exact path="/personas" element={<Personas />}>
      </Route>
      <Route exact path="/" element={<Home/>}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
