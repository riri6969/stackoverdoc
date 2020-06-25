import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign_up from "./pages/Sign-up";
import Profil from "./pages/Profil";
import feed from "./pages/Feed";
import Header from "./components/Header";
import question_page from "./pages/Question_page";
import Footer from "./components/Footer";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Sign-up" component={Sign_up} />
            <Route path="/profile" component={Profil} />
            <Route path="/feed" component={feed} />
            <Route path="/question" component={question_page} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }

}

export default App;
