import Index from '@/pages/admin/pages/Index'
import New from '@/pages/admin/pages/New'
import Profile from '@/pages/admin/pages/Profile'
import Setting from '@/pages/admin/pages/Setting'
import Edit from '@/pages/admin/pages/Edit'
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
  path: '/edit',
  name: 'Edit',
  exact: true,
  component: Edit,
}, {
  path: '/setting',
  name: 'Setting',
  exact: true,
  component: Setting,
}]
