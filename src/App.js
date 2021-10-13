import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
    {/* <Navbar /> */}
    <Switch>

      <Route exact path='/'>
        <Home/>
      </Route>

 

    </Switch>
  </Router>
  );
}

export default App;
