import SearchSaga from '../components/search/redux/SearchSaga'
import { fork, all } from 'redux-saga/effects'

function* RootSaga() {
  yield all([
    fork(SearchSaga)
  ])
}

export default RootSaga