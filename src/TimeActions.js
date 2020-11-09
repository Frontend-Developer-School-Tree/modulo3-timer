import React from 'react'

class TimeAction extends React.Component {
  render() {
    return (
      <button className="TimeAction" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
}

class TimeActions extends React.Component {

  render() {
    return (
      <div className="TimeActions">
        {this.props.showStart && <TimeAction label="Start" onClick={this.props.start} />}
        {this.props.showPause && <TimeAction label="Pause" onClick={this.props.pause} />}
        <TimeAction label="Reset" onClick={this.props.reset} />
      </div>
    )
  }

}

export default TimeActions