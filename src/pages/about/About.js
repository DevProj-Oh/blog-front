import React from 'react'
import Header from '../../components/Header'
import BackgroundImage from 'startbootstrap-clean-blog/img/about-bg.jpg'

class About extends React.Component {
  render() {
    return (
      <div>
        <Header mainHeading="关于" subHeading="刻意练习，持续精进" backgroundImage={BackgroundImage} />

        <h1>About</h1>
      </div>
    )
  }
}

export default About
