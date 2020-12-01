import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
    AlbumsCoverWrapper
} from './style'

const NewAlbumsCover = (props) => {
    const { info, width, size, bgp } = props

    return (
        <AlbumsCoverWrapper
            width={width}
            size={size}
            bgp={bgp}>
            <img src={info.picUrl} alt="" className="img_style" />
            <a href="/todo" className="cover image_cover">1</a>
            <div className="name text-nowrap">{info.name}</div>
            <div className="artist text-nowrap">{info.artist.name}</div>
        </AlbumsCoverWrapper>
    )
}

NewAlbumsCover.propTypes = {
    info: PropTypes.object,
    width: PropTypes.string,
    size: PropTypes.string,
    bgp: PropTypes.string
}

NewAlbumsCover.defaultProps = {
    info: { artist: '' },
    width: "118",
    size: "100",
    bgp: "-570px"
}

export default memo(NewAlbumsCover)