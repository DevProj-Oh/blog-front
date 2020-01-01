import React from 'react'
import BackgroundImage from 'startbootstrap-clean-blog/img/post-bg.jpg'

class ArticleHeader extends React.Component {

  render() {

    const { title, category, updated_at } = this.props

    return (
      <header className="masthead" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>{title}</h1>
                <span className="meta">分类：
                <a className="pr-2" href="/#">{category}</a>
                  更新于：{updated_at}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default ArticleHeader
