import React from 'react' 
import PropTypes from 'prop-types' 
class ContestPreview extends React.Component {

  _onClick = () => {
    console.log(this.props.contestName)
    this.props.onContestClick(this.props.id)
  }

  render = () =>( 
    <div className="ContestPreview" style={{cursor: "pointer"}} onClick={this._onClick}>
      <p>{this.props.contestName}</p>
      <p>{this.props.categoryName}</p>
      <hr />
    </div>
  )

}

ContestPreview.propTypes = {
  id: PropTypes.number , 
  onContestClick: PropTypes.func.isRequired,
  contestName: PropTypes.string.isRequired , 
  categoryName: PropTypes.string.isRequired 
}

export default ContestPreview 
