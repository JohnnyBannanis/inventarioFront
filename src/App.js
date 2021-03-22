
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </div>
  );
}

export default App;
