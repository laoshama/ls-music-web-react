import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
    width: 140px;           
    height: 200px;

    .cover-top {
        position: relative;
        width: 140px;           
        height: 140px;
  
        .img_position {
            background-position: 0 0;
        }

        .cover-bottom {
            position: absolute;
            width: 100%;
            height: 27px;
            bottom: -1px;

            .image_cover {
                background-position: 0 -537px;
            }

            .sprite_icon {
                width: 27px;
                height: 27px;
                background-position: 10px -16px;
            }

            .number {
                position: absolute;
                bottom: -1px;
                left: 30px;

                width: 60px;
                height: 27px;
                line-height: 27px;
                color: #CCC;
                text-indent: 0;
            }

            .play-icon {
                position: absolute;
                bottom: -1px;
                right: 6px;

                width: 20px;
                background-position: 0 5px;
            }
        }
    }

    .cover-disctiption {
        font-size: 14px;

        :hover {
            text-decoration: underline;
        }
    }
`