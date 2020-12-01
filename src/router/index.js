import { Redirect } from "react-router-dom";

import LSDiscover from '@/pages/discover'
import LSMine from '@/pages/mine'
import LSFriends from '@/pages/friends'
import LSMall from '@/pages/mall'
import LSMusicians from '@/pages/musicians'
import LSDownloadClient from '@/pages/download_client'
import LSRecommend from "@/pages/discover/c-pages/recommend";
import LSRanking from "@/pages/discover/c-pages/ranking";
import LSPlaylist from "@/pages/discover/c-pages/playlist";
import LSDjradio from "@/pages/discover/c-pages/djradio";
import LSSinger from "@/pages/discover/c-pages/singer";
import LSAlbum from "@/pages/discover/c-pages/album";

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (<Redirect to="/discover" />)
    },
    {
        path: '/discover',
        component: LSDiscover,
        routes: [
            {
                path:'/discover',
                exact:true,
                render: () => (<Redirect to="/discover/recommend" />)
            },
            {
                path:"/discover/recommend",
                component: LSRecommend
            },
            {
                path:"/discover/ranking",
                component: LSRanking
            },
            {
                path:"/discover/playlist",
                component: LSPlaylist
            },
            {
                path:"/discover/djradio",
                component: LSDjradio
            },
            {
                path:"/discover/singer",
                component: LSSinger
            },
            {
                path:"/discover/album",
                component: LSAlbum
            }
        ]
    },
    {
        path: '/mine',
        component: LSMine
    },
    {
        path: '/friends',
        component: LSFriends
    },
    {
        path: '/mall',
        component: LSMall
    },
    {
        path: '/musicians',
        component: LSMusicians
    },
    {
        path: '/download_client',
        component: LSDownloadClient
    },
]

export default routes