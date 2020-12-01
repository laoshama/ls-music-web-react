import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeAlbumsAction } from '../../store/createAction'
import { NEW_ALBUMS_LIMIT } from '@/common/contants'

import { Carousel } from 'antd';
import LSThemeHeaderRcm from '@/components/theme-header-rcm'
import NewAlbumsCover from '@/components/new-albums-cover'
import { NewAlbumWrapper } from './style'

export default memo(function LSNewAlbum() {
    //  states 
    const CarouselRef = useRef()

    // redux hooks
    const dispatch = useDispatch()
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(['recommend', 'newAlbums'])
    }), shallowEqual)

    //  other hooks
    useEffect(() => {
        dispatch(changeAlbumsAction(NEW_ALBUMS_LIMIT))
    }, [dispatch])

    return (
        <NewAlbumWrapper>
            <LSThemeHeaderRcm title="新碟上架"></LSThemeHeaderRcm>
            <div className="contant">
                <Carousel autoplay={true} dots={false} ref={CarouselRef}>
                    {
                        [0, 1].map(item => {
                            return (
                                <div className="each_page" key={item}>
                                    {
                                        newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                            return (
                                                <NewAlbumsCover
                                                    key={iten.id}
                                                    info={iten}
                                                    width="118"
                                                    size="100"
                                                    bgp="-570px" />
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>
                <button className="left sprite_02" onClick={e => CarouselRef.current.prev()}></button>
                <button className="right sprite_02" onClick={e => CarouselRef.current.next()}></button>
            </div>
        </NewAlbumWrapper>
    )
})
