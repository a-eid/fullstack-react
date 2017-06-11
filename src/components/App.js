import React from 'react'
import Header from './Header' 
import ContestList from './ContestList'
import axios from 'axios'
import PropTypes from 'prop-types'

class App extends React.Component { 
  
  static propTypes = {
    initData: PropTypes.array
  }

  state = { header: "Some title" , contests: this.props.initData }

  componentDidMount(){
    axios.get('/api/data').then( ({data})=> 
      this.setState({contests: data})
    ).catch(console.error)
  }

  render = () => (
    <div className="App container text-center">
      <Header message={this.state.header} />
      <ContestList contests={this.state.contests}/>
    </div>
  )
}

export default App 