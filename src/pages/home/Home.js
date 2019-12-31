import React from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Pager from '../../components/Pager'
import BackgroundImage from 'startbootstrap-clean-blog/img/home-bg.jpg'

import '../../mock/article'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      pages: {
        prevPage: 0,
        nextPage: 0,
      }
    }

    axios.get('/articles')
      .then((res) => {
        const data = res.data

        this.setState({
          articles: data.articles,
          pages: {
            prevPage: data.pages.prev_page,
            nextPage: data.pages.next_page,
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const appName = this.props.appName

    return (
      <div>
        <Header mainHeading={appName} subHeading="刻意练习，持续精进" backgroundImage={BackgroundImage} />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">

              {
                this.state.articles.map((article, i) => {
                  return (
                    <div className="post-preview" key={i}>
                      <a href="post.html">
                        <h2 className="post-title">{article.title}</h2>
                        <h3 className="post-subtitle">{article.summary}</h3>
                      </a>
                      <p className="post-meta">分类：<a href="/#">{article.category}</a> 更新于：{article.updated_at}</p>
                      <hr />
                    </div>
                  )
                })
              }
              <Pager prevPage={this.state.pages.prevPage} nextPage={this.state.pages.nextPage} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
