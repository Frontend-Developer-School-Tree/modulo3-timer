import React from 'react'

class Title extends React.Component {

  render() {
    return (
      <div className="Title">
        <h1 className="TitleMain">{this.props.main}</h1>
      </div>
    )
  }

}

export default Title