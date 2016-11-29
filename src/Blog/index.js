import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
     return(
       <div>
       Bolg
       {this.props.children}
       </div>
     )
  }
}

export default Blog;
