import React from 'react' 
import ContestPreview from './ContestPreview' 
import PropTypes from 'prop-types' 

const ContestList = ({contests}) => (
  <div>
    {contests.map(c =>  <ContestPreview key={c.id} {...c} /> )}
  </div>
)

ContestList.propTypes = {
  contests: PropTypes.array 
}

export default ContestList 