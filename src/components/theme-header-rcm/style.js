import styled from 'styled-components'

export const HeaderRcmWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    border-bottom: 2px solid #C10D0C;
    padding: 0 10px 0 0;
`

export const HeaderRcmLeft = styled.div`
    display: flex;

    i {
        display: inline-block;
        width: 33px;
        height: 33px;
        background-position: -225px -156px;
    }
`

export const HeaderRcmNav = styled.div`
    display: flex;
    margin: 5px 0 0 20px;

    color: #666;

    .vertical-line {
        margin: 0 16px;
        color: #CCC;

        :last-child {
            display: none;
        }
    }
`

export const HeaderRcmRight = styled.div`
    color: #666;
    padding-top: 10px;

    i {
        display: inline-block;
        vertical-align: middle;
        width: 12px;
        height: 12px;

        background-position: 0 -240px;
    }

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`