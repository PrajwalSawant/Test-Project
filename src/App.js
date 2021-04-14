
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Auth from './Auth/Auth';
import Nav from './component/Navbar';
import SecureRoute from './component/SecureRoute';
import Login from './component/Login';
import Signup from './component/Signup';
import HomePage from './component/home/HomePage';
import UserPage from './component/User';
import TaskPage from './component/Task/TaskPage';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App">

      <Auth>
        <Router>
          <Nav />
          <Container>
            <Switch>
            <SecureRoute exact path="/" component={HomePage} />
            <SecureRoute  path="/user" component={UserPage} />
            <SecureRoute  path="/tasks" component={TaskPage} />
            </Switch>
          </Container>
         <Route path="/login" component={Login} />
         <Route path ='/signup' component={Signup}/>

        </Router>
      </Auth>
    </div>
  );
}

export default App;
