import React from 'react'
import TimeViewer from './TimeViewer'

class TimeList extends React.Component {

  render() {
    return (
      <ul className="TimeList">
        {this.props.list.map((value, index) => {
          return <li key={index}><TimeViewer value={value} small /></li>
        })}
      </ul>
    )
  }

}

export default TimeList