import React from 'react'
import Header from '../../components/Header'
import BackgroundImage from 'startbootstrap-clean-blog/img/home-bg.jpg'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header mainHeading="DevProj" subHeading="刻意练习，持续精进" backgroundImage={BackgroundImage} />

        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
