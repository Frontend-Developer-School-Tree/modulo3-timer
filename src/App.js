import React from 'react'
import Title from './Title'
import TimeViewer from './TimeViewer'
import TimeActions from './TimeActions'
import TimeList from './TimeList'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = this.getDefaultState()
  }

  getDefaultState() {
    return {
      value: 0,
      running: false,
      list: []
    }
  }

  start = () => {
    this.timerInterval = setInterval(() => {
      this.setState({ value: this.state.value + 1 })
    }, 100)

    this.setState({ running: true })
  }

  pause = () => {
    if (this.timerInterval) clearInterval(this.timerInterval)

    this.setState({ running: false })
  }

  reset = () => {
    this.pause()
    this.setState({ value: 0, running: false, list: this.state.list.concat([this.state.value]) })
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <Title main="Timer" />
        <TimeViewer value={this.state.value} />
        <TimeActions start={this.start} pause={this.pause} reset={this.reset} showStart={!this.state.running} showPause={this.state.running} />
        <TimeList list={this.state.list} />
      </div>
    )
  }

}

export default App
