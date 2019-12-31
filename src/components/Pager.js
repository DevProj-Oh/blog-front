import React from 'react'

class Pager extends React.Component {

  render() {
    return (
      <div className="clearfix">
        <a className="btn btn-primary " href={`/home?page=${this.props.prevPage}`}>上一页</a>
        <a className="btn btn-primary float-right" href={`/home?page=${this.props.nextPage}`}>下一页</a>
      </div>
    )
  }
}

export default Pager