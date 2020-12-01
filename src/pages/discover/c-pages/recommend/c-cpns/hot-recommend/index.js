import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeHotRecommendsAction } from '../../store/createAction'
import { HOT_RECOMMENDS_LIMIT } from '@/common/contants'

import LSThemeHeaderRcm from '@/components/theme-header-rcm'
import LSSongsCover from '@/components/songs-cover'
import {
    HotRecommendWrapper,
    HotRecommendContent
} from './style'

export default memo(function LSHotRecommend() {
    //  states
    const keywords = ['华语', '流行', '摇滚', '民谣', '电子']

    //  redux hooks
    const dispatch = useDispatch()
    const { hotRecommends } = useSelector((state) => ({
        hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }), shallowEqual)

    //  other hooks

    useEffect(() => {
        dispatch(changeHotRecommendsAction(HOT_RECOMMENDS_LIMIT))
    }, [dispatch])

    return (
        <HotRecommendWrapper>
            <LSThemeHeaderRcm title="热门推荐" keywords={keywords} />
            <HotRecommendContent className="content-list">
                {hotRecommends.map(item => <LSSongsCover key={item.id} info={item} />)}
            </HotRecommendContent>
        </HotRecommendWrapper>
    )
})
