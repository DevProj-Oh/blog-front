import React from 'react'

import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'startbootstrap-clean-blog/css/clean-blog.min.css'

import Navigation from '../components/Navigation'
import Header from '../components/Header'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      appName: "DevProj",
    }
  }

  render() {

    return (
      <div>
        <Navigation appName={this.state.appName} />
        <Header mainHeading="关于" subHeading="关于-副标题" />
      </div>
    )
  }

}

export default App;
