 // eslint-disable-net-line
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import {
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Navbar/Home';

function App({ currentUser, checkUserSession, dsa }) {
  return (
      <div className="App">
        <Navbar/>
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      
        <Route path="/contact">
          <Users />
        </Route> 
        <Route path="/home">
            <Home />
          </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
         
      </Switch>
      </div>
  );
}


function About() {
  return <h2>About</h2>;  
}

function Users() {
  return <h2>Users</h2>;
}
function  PageNotFound(){
  return <h3>dwsds</h3>
}
export default App;