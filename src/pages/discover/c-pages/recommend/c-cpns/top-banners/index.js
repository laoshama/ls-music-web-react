//  导入的第三方工具
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

//  导入的工具类
import { changeBannersAction } from '../../store/createAction'

//  导入的组件
import { Carousel } from 'antd';
import {
    TopBannersWrapper,
    TopBannerLeft,
    TopBannersRight,
    TopBannersControl
} from './style'

export default memo(function LSTopBanners() {
    //  管理组件内部的数据
    const [currentIndex, setCurrentIndex] = useState(0)

    // 操作redux管理的数据
    const dispatch = useDispatch()
    const { banners } = useSelector(state => ({
        banners: state.getIn(["recommend", "banners"])
    }), shallowEqual)

    //  hooks
    const bannerRef = useRef()
    useEffect(() => {
        dispatch(changeBannersAction())
    }, [dispatch])

    const changeBanner = useCallback((from, to) => {
        setCurrentIndex(to)
    },[])

    // 业务逻辑代码
    const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + "?imageView&blur=40x20"

    return (
        <TopBannersWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <TopBannerLeft>
                    <Carousel effect='fade'
                        autoplay={true}
                        className='antd-banner-with'
                        beforeChange={changeBanner}
                        ref={bannerRef}>
                        {banners.map(item => {
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                            )
                        })}
                    </Carousel>
                </TopBannerLeft>
                <TopBannersRight />
                <TopBannersControl>
                <div className="left" onClick={e => {bannerRef.current.prev()}}></div>
                <div className="right" onClick={e => {bannerRef.current.next()}}></div>
            </TopBannersControl>
            </div>
        </TopBannersWrapper>
    )
})
