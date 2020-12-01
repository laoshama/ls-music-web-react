import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { getFormatCount, getSizeImage } from '@/utils/format-utils'

import { SongsCoverWrapper } from './style'

const LSSongsCover = (props) => {
    const { info } = props
    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <div className="image_cover img_position"></div>
                <img src={getSizeImage(info.picUrl, 140)} alt="" style={{ width: 140 }} />
                <div className="cover-bottom">
                    <div className="image_cover">
                        <div className="sprite_icon"></div>
                        <div className="number">{getFormatCount(info.playCount)}</div>
                        <a href="/" className="sprite_icon play-icon"> </a>
                    </div>
                </div>
            </div>
            <a href="#/" className="cover-disctiption">{info.name}</a>
        </SongsCoverWrapper>
    )
}
LSSongsCover.propTypes = {
    info: PropTypes.object
}

LSSongsCover.defaultProps = {
    info: {}
}


export default memo(LSSongsCover)