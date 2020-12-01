import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'

import {
    HeaderRcmWrapper,
    HeaderRcmLeft,
    HeaderRcmRight,
    HeaderRcmNav
} from './style'


const LSThemeHeaderRcm = memo(function (props) {
    const { title, keywords } = props

    return (
        <HeaderRcmWrapper>
            <HeaderRcmLeft>
                <i className="sprite_02"></i>
                <h2>{title}</h2>
                <HeaderRcmNav>
                    {keywords.map(item => {
                        return (
                            <Fragment key={item}>
                                <div>{item}</div>
                                <span className="vertical-line">|</span>
                            </Fragment>
                        )
                    })}
                </HeaderRcmNav>
            </HeaderRcmLeft>
            <HeaderRcmRight>
                <span>更多</span>
                <i className="sprite_02"></i>
            </HeaderRcmRight>
        </HeaderRcmWrapper>
    )
})

LSThemeHeaderRcm.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

LSThemeHeaderRcm.defaultProps = {
    keywords: []
}

export default LSThemeHeaderRcm