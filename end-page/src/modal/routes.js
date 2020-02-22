// import Login from '../components/login'
import lazyLoad from '../common/LazyLoad'
const routes = [
    {
        path: "/",
        // component: Login
        component: lazyLoad(() => import('../components/login')),
        childRoutes: []
    },
]
export default routes;