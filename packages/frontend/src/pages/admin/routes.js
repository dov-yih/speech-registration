import Index from './pages/Index'
import New from './pages/New'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
export default [{
    path: '/',
    exact: true,
    name: 'Home',
    component: Index,
  }, {
    path: '/profile',
    exact: true,
    name: 'Profile',
    component: Profile,
  }, {
    path: '/new',
    exact: true,
    name: 'New',
    component: New,
  }, {
    path: '/setting',
    name: 'Setting',
    exact: true,
    component: Setting,
  }
]
