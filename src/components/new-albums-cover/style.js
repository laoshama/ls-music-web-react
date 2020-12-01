import styled from 'styled-components'

export const AlbumsCoverWrapper = styled.div`
    position: relative;
    width: ${props => props.width + "px"};
    height: 150px;

    img{
        width: ${props => props.size + "px"};
        box-shadow: 2px 2px 3px rgba(0, 0, 0, .3);
        margin-bottom: 3px;
    }

    .cover {
        position: absolute;
        top: 0;
        width: 118px;
        height: 100px;
        background-position: 0 -570px;
    }

    .name,
    .artist {
        font-size: 12px;
    }

    .name {
        color: #000;
    }

    .artist {
        color: #666;
    }
`