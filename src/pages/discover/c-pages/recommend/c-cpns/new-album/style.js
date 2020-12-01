import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
    .contant {
        position: relative;
        width: 684px;
        height: 190px;
        background-color: #dddddd;
        margin: 20px 0;
        padding: 24px;
        border: 1px solid #ccc;

        .each_page {
            display: flex !important;
            justify-content:space-between;
        }

        button {
            position: absolute;
            top: 40%;
            width: 24px;
            height: 24px;

            cursor: pointer;

            :hover {
               transform: scale(1.5)
            }
        }

        .left {
            left: 0;
            background-position: -260px -75px;
        }
        .right {
            right: 0;
            background-position: -300px -75px;
        }
    }
`