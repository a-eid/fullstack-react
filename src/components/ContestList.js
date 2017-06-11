import React from 'react' 
import ContestPreview from './ContestPreview' 
import PropTypes from 'prop-types' 

const ContestList = ({contests , onContestClick}) => (
  <div>
    {console.log(contests)}
    {Object.keys(contests).map( id =>  <ContestPreview 
       key={id} 
       onContestClick={onContestClick} {...contests[id]} />)}
  </div>
)

ContestList.propTypes = {
  contests: PropTypes.object.isRequired,
  onContestClick: PropTypes.func.isRequired 
}

export default ContestList 