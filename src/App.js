 // eslint-disable-net-line
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import {
  
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
      <div className="App">
        <Navbar/>
        <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <About />
        </Route>

        {/* Note how these two routes a`re ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        
        <Route path="/contact">
          <Users />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route exact path="/home">
          <Home />
        </Route>
        <Route render={function () {
              return <p>Not found</p>
            }} />
      </Switch>
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;  
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
