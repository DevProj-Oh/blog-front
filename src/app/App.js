import React from 'react'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'startbootstrap-clean-blog/css/clean-blog.min.css'

import AboutBgImg from 'startbootstrap-clean-blog/img/about-bg.jpg'
import Navigation from '../component/Navigation'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      appName: "DevProj",
    }
  }

  render() {
    let headerStyle = {
      backgroundImage: `url(${AboutBgImg})`,
    };
    return (
      <div>
        <Navigation appName={this.state.appName} />

        <header className="masthead" style={headerStyle}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="page-heading">
                  <h1>About Me</h1>
                  <span className="subheading">This is what I do.</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }

}

export default App;
