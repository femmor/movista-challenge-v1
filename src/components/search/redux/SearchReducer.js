import { Map, fromJS } from 'immutable'
import types from '../types'

const initialState = Map({
  searchResults: []
})

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setSearchResults: {
      return state.merge({
        searchResults: fromJS(action.payload)
      })
    }
  
    default: {
      return state
    }
  }
}

export default SearchReducer