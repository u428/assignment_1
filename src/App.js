import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GetMapping from './Component/GetMapping';
import Nav from './Component/Nav';
import Viewer from './Component/Viewer'

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
    
      <Route path="/list" exact component={GetMapping} />
      <Route path="/viewer" exact component={Viewer} />
      <Route path="/" component={Home}></Route>
    </Switch>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div className="container mt-3">
      <div className="django">
          <h3>Welcome to My first project</h3>
          <p>Created by Ulugbek Qurbanov</p>
      </div>
    </div>
  )
}

export default App;
