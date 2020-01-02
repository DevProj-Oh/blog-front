import React from 'react'
import axios from 'axios'
import ArticleHeader from '../../components/ArticleHeader'

import '../../mock/article'

class Article extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      category_id: 0,
      category_name: "",
      title: "",
      content: "",
      updated_at: "",
    }
  }

  componentDidMount() {
    const { article_id } = this.props.match.params

    axios.get(`/articles/${article_id}`)
      .then((res) => {
        const data = res.data

        this.setState({
          title: data.title,
          content: data.content,
          category_id: data.category.category_id,
          category_name: data.category.name,
          updated_at:data.updated_at,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <ArticleHeader title={this.state.title} category_name={this.state.category_name} updated_at={this.state.updated_at} />

        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">

                <p>{this.state.content}</p>

                <hr />
                <p>
                  本文采用
                  <a className="text-info" style={{ textDecoration: "none" }} href="https://learnku.com/docs/guide/cc4.0/6589">「CC 协议」</a>
                  ，转载必须注明作者和本文链接。
                </p>
              </div>
            </div>
          </div>
        </article>

        <hr />
      </div>
    )
  }
}

export default Article
