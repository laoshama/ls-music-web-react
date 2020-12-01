import styled from "styled-components";

import sprite_01 from "@/assets/img/sprite_01.png"

export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
    }

    .divider {
        height: 5px;
        background-color: #C20C0C;
    }
`

export const HeaderLeft = styled.div`
    display: flex;

    .nav_logo {
        background-position: 0 0;
        width: 176px;
        height: 70px;
    }

    .select_item {
        position: relative;
        display: inline-block;
        padding: 0 19px;
        line-height: 70px;
        font-size: 14px;
        color: #fff;

        :hover {
            background-color: #000;
        }
    }

    .select_list{
        position: relative;
        :last-child {
        position: relative;

            ::after {
                position: absolute;
                top: 20px;
                right: -15px;

                content: "";
                width: 28px;
                height: 19px;
                background: url(${sprite_01}) no-repeat -190px 0;
            }
        }
    }

    .active_item {
        background-color: #000;
        
        ::after {
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -6px;

            content: "";
            width: 12px;
            height: 7px;
            background: url(${sprite_01}) no-repeat -226px 1px;
            }
    }
`

export const HeaderRight = styled.div`
    display: flex;
    height: 32px;

    .search {
        border-radius: 30px;
        width: 167px;
    }

    .creator_center {
        display: inline-block;
        border-radius: 30px;
        line-height: 34px;
        text-align: center;
        width: 80px;
        background-color: transparent;
        color: #ccc;
        box-shadow: 0 0 2px;
        margin: 0 20px 0;

        &:hover {
            box-shadow: 0 0 5px #fff;
            cursor: pointer;
        }
    }

    .login_button {
        background-color: transparent;
        box-shadow: 0 0 2px;
        color: #ccc;
        border-radius: 5px;
        width: 60px;

        &:hover {
            box-shadow: 0 0 5px #fff;
            cursor: pointer;
        }
    }
`