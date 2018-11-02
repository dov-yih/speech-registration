import Archive from '@/pages/archive'
import Error404 from '@/pages/error'
import Next from '@/pages/next'
import Login from '@/pages/login'
export default [{
  path: '/next',
  exact: true,
  name: '下一周',
  component: Next,
}, {
  path: '/archives',
  exact: true,
  name: '归档',
  component: Archive,
}, {
  path: '/login',
  exact: true,
  name: '登陆',
  component: Login,
}]
