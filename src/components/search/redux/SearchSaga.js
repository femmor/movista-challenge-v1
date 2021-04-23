import types from "../types"
import { debounce, put, call } from "redux-saga/effects"
import { setSearchResults } from '../action'
import axios from "axios"

function* setSearch({ value }) {
  try {
    const query = value
    const baseUrl = 'http://api.giphy.com/v1/gifs/search'
    const api_key = '0s8YhD2rpCePplp27WvsmYEPqV1wYNE0'
    const limit = 20
    const url = `${baseUrl}`

    const { data } = yield axios(url, {
      params: {
        api_key,
        limit,
        q: query
      }
    })
    return yield put(setSearchResults(data.data))
  } catch (error) {
    console.log(error)
  }
}

function* watchSearch() {
  yield debounce(1000, types.watchGetSearchResults, setSearch)
}

export default watchSearch