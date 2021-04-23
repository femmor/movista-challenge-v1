import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults } from "./action"

// Search Component
const Search = (props) => {
  return (
    <div>
      <input type="text" onChange={e => callAPI(e, props)}/>
    </div>
  )
}


// Functions
const callAPI = async (e, props) => {
  e.target.value.trim() !== '' && props.getSearchResults(e.target.value)
}

const mapDispatchToProps = {
  getSearchResults
}

export default connect(null, mapDispatchToProps)(Search)
