import styled from 'styled-components'

import downloadImage from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

export const TopBannersWrapper = styled.div`
    position: relative;
    background: url(${props => props.bgImage}) center center/6000px;
    width: 100%;
    height: 285px;

    .banner {
        display: flex;
        position: relative;
        background-color: #F00;

        .antd-banner-with {
            width: 726px;

            .banner-item {
                img {
                    width: 726px;
                    height: 285px;
                }
            }
        }
    }
`

export const TopBannerLeft = styled.div`
    height: 285px;
    background-color: red;

    .ant-carousel .slick-dots li {
        width: 10px;
        margin: 0 6px;

        button {
        width: 10px;
        height: 10px; 
        border-radius: 50%;
    }
    }
`

export const TopBannersRight = styled.div`
    width: 254px;
    background: url(${downloadImage}) no-repeat;
`

export const TopBannersControl = styled.div`
    .left {
        position: absolute;
        top: 100px;
        left: -68px;

        width: 37px;
        height: 63px;

        background-image: url(${banner_sprite});
        background-position: 0 -360px;

        &:hover {
            cursor: pointer;
            background-color: #333;
        }
    }

    .right {
        position: absolute;
        top: 100px;
        right: -68px;

        width: 37px;
        height: 63px;

        background-image: url(${banner_sprite});
        background-position: 0 -508px;

        &:hover {
            cursor: pointer;
            background-color: #333;
        }
    }
`