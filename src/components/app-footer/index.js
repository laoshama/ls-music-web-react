import React, { memo } from 'react'

import { footerLinks, footerImages } from '@/common/local_data.js'

import { FooterWrapper, FooterLeft, FooterRight } from './style.js'

export default memo(function LSAppFooter() {
    function showFooterLinks() {
        return footerLinks.map(item => {
            return (
                <a href={item.link} key={item.title}>
                    {item.title}
                    <span className="line">|</span>
                </a>
            )
        })
    }

    function showImages(item) {
        return (
            <a href={item.link} key={item.title}>
                <div className="footer_sprite"></div>
                <div>{item.title}</div>
            </a>
        )
    }

    return (
        <div className="bgc_color box_line">
            <FooterWrapper className='wrap-v2'>
                <FooterLeft>
                    <div className="firstLine">{showFooterLinks()}</div>
                    <div className="secondLine">
                        <div>网易公司版权所有@1997-2020</div>
                        <div>杭州乐读科技有限公司运营：</div>
                        <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
                    </div>
                    <div className="thirdLine">
                        <span>违法和不良信息举报电话：0571-89853516</span>
                        <span>举报邮箱：</span>
                        <a href="/">ncm5990@163.com</a>
                    </div>
                    <div className="fouthLine">
                        <span>粤B2-20090191-18</span>
                        <a href="https://beian.miit.gov.cn/#/Integrated/index">工业和信息化部备案管理系统网站</a>
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
                            <div className="left_logo"></div>
                            <span>浙公网安备 33010902002564号</span>
                        </a>
                    </div>
                </FooterLeft>
                <FooterRight>
                    {footerImages.map(showImages)}
                </FooterRight>
            </FooterWrapper>
        </div>
    )
})
