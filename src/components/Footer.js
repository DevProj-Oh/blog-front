import React from 'react'

class Footer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          icon: "fa-github",
          url: "https://github.com/hui-ho",
        },
        {
          icon: "fa-twitter",
          url: "/#",
        },
        {
          icon: "fa-facebook-f",
          url: "/#",
        },
      ],
    }
  }

  render() {
    const appName = this.props.appName

    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                {
                  this.state.links.map((link, i) => {
                    return (
                      <li className="list-inline-item" key={i}>
                        <a href={link.url}>
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className={`fab ${link.icon} fa-stack-1x fa-inverse`}></i>
                          </span>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
              <p className="copyright text-muted">Copyright &copy; {appName} 2020</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
