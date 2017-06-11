import React from 'react' 
import PropTypes from 'prop-types' 

const ContestPreview = ({contestName:contest , categoryName:category}) => (
  <div className="ContestPreview" style={{cursor: "pointer"}} onClick={() => console.log('clicked')}>
    <p>{contest}</p>
    <p>{category}</p>
    <hr />
  </div>
)

ContestPreview.propTypes = {
  contestName: PropTypes.string.isRequired , 
  categoryName: PropTypes.string.isRequired 
}

export default ContestPreview 
