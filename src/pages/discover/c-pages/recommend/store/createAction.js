import * as actionTypes from './constance'
import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getRanking
} from '@/services/recommend'

import store from '@/store'

export const changeBannersAction = () => {
    return function () {
        getTopBanners().then(res => {
            store.dispatch({ type: actionTypes.CHANGE_BANNNERS, banners: res.banners })
        })
    }
}

export const changeHotRecommendsAction = (limit) => {
    return function () {
        getHotRecommends(limit).then(res => {
            store.dispatch({ type: actionTypes.CHANGE_HOT_RECOMMENDS, hotRecommends: res.result })
        })
    }
}

export const changeAlbumsAction = (limit) => {
    return () => {
        getNewAlbums(limit).then(res => {
            store.dispatch({ type: actionTypes.CHANGE_NEW_ALBUMS, newAlbums: res.albums })
        })
    }
}

export const changeRankingAction = (index) => {
    return () => {
        getRanking(index).then(res => {
            switch (index) {
                case 3:
                    store.dispatch({ type: actionTypes.CHANGE_UP_RANKING, upRanking: res.playlist })
                    break;
                case 0:
                    store.dispatch({ type: actionTypes.CHANGE_NEW_RANKING, newRanking: res.playlist })
                    break;
                case 2:
                    store.dispatch({ type: actionTypes.CHANGE_ORIGIN_RANKING, originRanking: res.playlist })
                    break;
                default:
            }
        })
    }
}