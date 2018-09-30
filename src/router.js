import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/index')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

export default [{
  path: '/',
  component: App, // top route corresponding to index.html
  children: [ // the second layer route corresponding to App.vue
    // emmpty address, turning to homepage
    {
      path: '',
      redirect: '/home'
    },
    // home, cities-list-age
    {
      path: '/home',
      component: home
    }
    //登录注册页
    {
        path: '/login',
        component: login
    },
  ]
}]
