import Index from './pages/Index'
import New from './pages/New'
import Profile from './pages/Profile'
import Password from './pages/Password'
export default [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/new',
    exact: true,
    component: New,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },{
    path: '/password',
    exact: true,
    component: Password,
  }
]
