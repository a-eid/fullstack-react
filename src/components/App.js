import React from 'react'
import Header from './Header'
import ContestList from './ContestList'
import ContestPage from './ContestPage'
import axios from 'axios'
import PropTypes from 'prop-types'

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url)

class App extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  state = { header: "All Contests", contests: this.props.data.contests , id: null  }

  componentDidMount() {
    axios.get('/api/data')
      .then(({ contests, id }) =>
        this.setState({ contests , id })
      ).catch(console.error)
  }

  fetchContest = (id) => {
    pushState({}, `/contest/${id}`)
    axios.get(`/api/data/${id}`).then(c => c.data)
      .then(c =>
        this.setState(ps => ({
          id,
          contests: c.contests
        }))
      )
      .catch(console.error)
  }
  currentContest = () => this.state.contests && this.state.contests[this.state.id]

  renderList = () => (
    <div>
      <Header message={this.state.header} />
      <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />
    </div>
  )

  render = () => (
    <div className="App container text-center">
      {console.log( this.state.id , this.state.contests )}
      {this.state.id == null ? this.renderList() : <ContestPage { ...this.currentContest() } />}
    </div>
  )
}

export default App 