import Signup from "./Signup";
import DashBoard from './DashBoard';

import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={DashBoard}/>
              <Route path="/signup" component={Signup}/>
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
