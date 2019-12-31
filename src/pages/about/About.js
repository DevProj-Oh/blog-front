import React from 'react'
import Header from '../../components/Header'
import BackgroundImage from 'startbootstrap-clean-blog/img/about-bg.jpg'

class About extends React.Component {
  render() {
    return (
      <div>
        <Header mainHeading="关于" subHeading="刻意练习，持续精进" backgroundImage={BackgroundImage} />

        {/* Main Content */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
            </div>
          </div>
        </div>

        <hr />

      </div>
    )
  }
}

export default About
