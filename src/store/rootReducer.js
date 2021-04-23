import { combineReducers } from "redux"
import SearchReducer from "../components/search/redux/SearchReducer"

export default combineReducers({
  search: SearchReducer
})