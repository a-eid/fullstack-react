import React from 'react'
import PropTypes from 'prop-types'

class ContestPage extends React.Component {
  static propTypes = {
    contestName: PropTypes.string, categoryName: PropTypes.string, description: PropTypes.string,
  }

  render = () => {
    const { categoryName, contestName, description } = this.props
    return (
      <div>
        <h2>{categoryName}</h2>
        <h3>{contestName}</h3>
        <p>{description}</p>
      </div>
    )
  }
}

export default ContestPage