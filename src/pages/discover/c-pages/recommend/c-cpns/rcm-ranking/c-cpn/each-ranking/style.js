import styled from 'styled-components'

export const RankingWrapper = styled.div`
    overflow: hidden;
    width: 230px;

    .ranking_top {
        display: flex;
        justify-content: space-between;
        width: 200px;
        margin: 20px 0 0 20px;

        .icon {
            position: relative;

            .cover {
                width: 80px;
                height: 80px;
                background-position: -145px -57px;
            }
        }

        .right {
            height: 50px;
            width: 110px;

            font-size: 14px;
            font-weight: 600;
            color: #333;

            margin-top: 5px;

            .name {
                :hover {
                        cursor: pointer;
                        text-decoration: underline;
                    }
            }

            .oprate {
                display: flex;
                margin-top: 5px;

                .play_btn {
                    width: 22px;
                    height: 22px;
                    background-position: -267px -205px;

                    :hover {
                        cursor: pointer;
                    }
                }

                .fav_btn {
                    width: 22px;
                    height: 22px;
                    background-position: -300px -205px;
                    margin-left: 10px;

                    :hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .ranking_content {
        padding-left: 30px;
        margin-top: 20px;

        .earch_song {
            display: flex;
            height: 32px;
            line-height: 32px;

            .order {
                width: 10px;
                margin-right: 10px;
            }

            .name {
                flex: 1;
            }

            :nth-child(-n+3) .order{
                color: #c10d0c;
            }

            :hover {
                cursor: pointer;
                text-decoration: underline;
                .operate {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 84px;
                    height: 32px;

                    .btn {
                        width: 17px;
                        height: 17px;
                    }

                    .play_btn {
                        background-position: -267px -268px;
                    }

                    .add_btn {
                        background-position: 2px -698px;
                    }

                    .fav_btn {
                        background-position: -297px -268px;
                    }
                }
            }
        }
    }

    .show_more {
        height: 32px;
        margin-right: 6px;
        line-height: 32px;
        text-align: right;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`