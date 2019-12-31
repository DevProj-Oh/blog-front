import React from 'react'
import { Link } from "react-router-dom";

class Navigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: [
        { 'title': '首页', 'path': '/home' },
        { 'title': '分类', 'path': '/categories' },
        { 'title': '标签', 'path': '/tags' },
        { 'title': '留言', 'path': '/contact' },
        { 'title': '关于', 'path': '/about' },
      ]
    }
  }

  render() {
    const appName = this.props.appName

    return (

      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="index.html">{appName}</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {
                this.state.menu.map((item, i) => {
                  return (
                    <li className="nav-item" key={i}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
