import React from 'react'
import Result from './Result'
import { connect } from "react-redux"

const Results = ({ searchResults }) => {
  if (searchResults) {
    return (
      <>
        {renderSearchResults(searchResults)}
      </>
    )
  } else {
    return null
  }
}


// renderSearchResults
const renderSearchResults = searchResults => {
  return searchResults.map((result, i) => {
    return <Result index={i} result={result} key={result.toJS().id}/>
  })
}


const mapStateToProps = state => {
  return {
    searchResults: state.search.get('searchResults')
  }
}

export default connect(mapStateToProps)(Results)
