import React from 'react'
import BackgroundImage from 'startbootstrap-clean-blog/img/about-bg.jpg'

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const mainHeading = this.props.mainHeading,
      subHeading = this.props.subHeading

    return (
      <header className="masthead" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>{mainHeading}</h1>
                <span className="subheading">{subHeading}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
