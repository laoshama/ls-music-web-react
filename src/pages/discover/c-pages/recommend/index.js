import React, { memo } from 'react'

import LSTopBanners from './c-cpns/top-banners'
import LSHotRecommend from './c-cpns/hot-recommend'
import LSNewAlbum from './c-cpns/new-album'
import LSRcmRanking from './c-cpns/rcm-ranking'
import {
    RecommendWrapper,
    RecommendLeft,
    RecommendRight
} from './style'


function LSRecommend() {
    return (
        <>
            <LSTopBanners />
            <RecommendWrapper className="wrap-v2">
                <RecommendLeft>
                    <LSHotRecommend />
                    <LSNewAlbum />
                    <LSRcmRanking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </RecommendWrapper>
        </>
    )
}



export default memo(LSRecommend)