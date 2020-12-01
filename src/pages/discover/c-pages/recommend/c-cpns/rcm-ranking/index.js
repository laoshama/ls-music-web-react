import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeRankingAction } from '../../store/createAction'

import LSThemeHeaderRcm from '@/components/theme-header-rcm'
import LSRankingItem from './c-cpn/each-ranking'
import { RankingWrapper } from './style'

export default memo(function LSRcmRanking() {
    // props

    // redux hooks
    const dispatch = useDispatch()
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"])
    }), shallowEqual)

    // other hooks
    useEffect(() => {
        dispatch(changeRankingAction(0))
        dispatch(changeRankingAction(2))
        dispatch(changeRankingAction(3))
    }, [dispatch])

    return (
        <RankingWrapper>
            <LSThemeHeaderRcm title="榜单"></LSThemeHeaderRcm>
            <div className="content">
                <LSRankingItem info={upRanking} />
                <LSRankingItem info={newRanking} />
                <LSRankingItem info={originRanking} />
            </div>
        </RankingWrapper>
    )
})
