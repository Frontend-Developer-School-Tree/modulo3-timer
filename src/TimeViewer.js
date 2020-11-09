import React from 'react'

class TimeViewer extends React.Component {

  getMinutes() {
    return Math.floor(this.props.value / 60)
  }

  getSeconds() {
    return this.props.value % 60
  }

  render() {
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()

    return (
      <div className="TimeViewer">
        <div className="TimeViewerValue" style={{ fontSize: this.props.small ? 20 : 50 }}>
          {minutes}m - {seconds}s
        </div>
      </div>
    )
  }

}

export default TimeViewer