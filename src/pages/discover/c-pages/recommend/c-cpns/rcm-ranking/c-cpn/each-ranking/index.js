import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils.js'

import { RankingWrapper } from './style'

export default memo(function LSRankingItem(props) {
    const { info = [] } = props
    const { tracks = [] } = info

    return (
        <RankingWrapper>
            <div className="ranking_top">
                <div className="icon">
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
                    <div className="cover image_cover"></div>
                </div>
                <div className="right">
                    <div className="name">{info.name}</div>
                    <div className="oprate">
                        <a className="play_btn sprite_02" href="/todo"> </a>
                        <a className="fav_btn sprite_02" href="/todo"> </a>
                    </div>
                </div>
            </div>
            <div className="ranking_content">
                {tracks.slice(0, 10).map((item, index) => {
                    return (
                        <div className="earch_song" key={item.id}>
                            <div className="order">{index + 1}</div>
                            <div className="name text-nowrap">{item.name}</div>
                            <div className="operate">
                                <div className="play_btn sprite_02 btn"></div>
                                <div className="add_btn sprite_icon2 btn"></div>
                                <div className="fav_btn sprite_02 btn"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="show_more">查看全部 &gt;</div>
        </RankingWrapper>
    )
})

