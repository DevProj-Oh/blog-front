import React from 'react'
import { Link } from "react-router-dom";

class Pager extends React.Component {

  render() {
    return (
      <div className="clearfix">
        <Link className="btn btn-primary" to={`/home/page/${this.props.prevPage}`}>上一页</Link>
        <Link className="btn btn-primary float-right" to={`/home/page/${this.props.nextPage}`}>下一页</Link>
      </div>
    )
  }
}

export default Pager
