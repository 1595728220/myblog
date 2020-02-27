// import Login from '../components/login'
import lazyLoad from '../common/LazyLoad'
const routes = [
    {
        path: "/",
        component: lazyLoad(() => import('../components/Login')),
        exact: true,
        childRoutes: []
    },
    {
        path: "/home",
        component: lazyLoad(() => import('../components/Home')),
        childRoutes: [
            {
                path: "/",
                exact: true,
                component: lazyLoad(() => import('../components/Notice')),
            },
            {
                path: "/link",
                component: lazyLoad(() => import('../components/Link')),
            },
        ]
    },
]
export default routes;