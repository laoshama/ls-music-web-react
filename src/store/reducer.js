import { combineReducers } from 'redux-immutable'

import recommend from '@/pages/discover/c-pages/recommend/store/reducer.js'

const reducer = combineReducers({
    recommend
})

export default reducer