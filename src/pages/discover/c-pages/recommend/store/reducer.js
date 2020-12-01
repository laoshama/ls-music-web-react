import { Map } from 'immutable'

import * as actionTypes from './constance'

const recommendDefaultState = Map({
    banners: [],
    hotRecommends: [],
    newAlbums: [],

    upRanking: {},
    newRanking: {},
    originRanking: {}
      
})

function reducer(state = recommendDefaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_BANNNERS:
            return state.set("banners", action.banners)
        case actionTypes.CHANGE_HOT_RECOMMENDS:
            return state.set("hotRecommends", action.hotRecommends)
        case actionTypes.CHANGE_NEW_ALBUMS:
            return state.set("newAlbums", action.newAlbums)
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking", action.upRanking)
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking", action.newRanking)
        case actionTypes.CHANGE_ORIGIN_RANKING:
            return state.set("originRanking", action.originRanking)
        default:
            return state;
    }
}

export default reducer