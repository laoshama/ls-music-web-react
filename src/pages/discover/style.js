import styled from 'styled-components'

export const TopNavWrapper = styled.div`
    margin-top: -5px;
    top: -5px;
    width: 100%;
`
export const TopMenu = styled.div`
    background-color: #C20C0C;
    
    .nav-items {
        display: flex;
        height: 35px;
        align-items: center;

        padding-left: 138px;
        & .active {
            background-color: #9B0909;
        }

        a {
            height: 20px;
            padding: 0 13px;
            margin-right: 30px;
            color: #FFF;

            border-radius: 20px;
        }
    }
`