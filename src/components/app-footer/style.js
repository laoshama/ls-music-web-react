import styled from 'styled-components'

import sprite_footer from "@/assets/img/sprite_footer_02.png"

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 173px;
    background-color: #f2f2f2;
`
export const FooterLeft = styled.div`
    width: 520px;

    .firstLine {
        display: flex;
        margin-top: 10px;

        a {
            color: #999;

            &:hover {
                text-decoration: underline;
            }

            .line {
                display: inline-block;
                padding: 0 11px;
            }
        }
    }

    .secondLine {
        display: flex;
        margin-top: 10px;

        & :nth-child(1) {
            margin-right: 10px;
        }
    }

    .thirdLine {
        margin-top: 10px;
        & :first-child {
            margin-right: 10px;
        }
    }

    .fouthLine {
        display: flex;
        justify-content: space-between;
        width: 470px;
        margin-top: 10px;
    }
    
`
export const FooterRight = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 1;
    text-align: center;
    margin-top: 40px;

    .footer_sprite {
        width: 43px;
        height: 45px;
        background-image: url(${sprite_footer});
        background-size: 100px;
    }

    & :nth-child(1) .footer_sprite {
        background-position: 43px -96px;

        :hover {
            background-position: 43px 43px;
        }
    }

    & :nth-child(2) .footer_sprite {
        width: 52px;
        background-position: 52px 0px;

        :hover {
            background-position: 52px 140px;
        }
    }

    & :nth-child(3) .footer_sprite {
        background-position: 43px -48px;

        :hover {
            background-position: 43px 92px;
        }
    }

    & :nth-child(4) .footer_sprite {
        background-position: 0px -96px;

        :hover {
            background-position: 0px 43px;
        }
    }

`
