import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'startbootstrap-clean-blog/css/clean-blog.min.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Article from '../pages/article/Article'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      appName: "DevProj",
    }
  }

  render() {

    return (
      <Router>
        <Navigation appName={this.state.appName} turnPage={this.turnPage} />
        <Switch>

          <Route exact
            path={["/", "/home", "/home/page/:page_num"]}
            render={({ match }) => <Home match={match} appName={this.state.appName} />}
          />

          <Route exact
            path="/articles/:article_id/:article_title"
            render={({ match }) => <Article match={match} />}
          />

          <Route exact
            path="/about"
            component={About}
          />

        </Switch>

        <Footer appName={this.state.appName} />
      </Router>
    )
  }
}

export default App;
