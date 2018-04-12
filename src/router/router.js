import App from '../App'

const home = r => require.ensure([], () => r(require('../components/HelloWorld')), 'home')   //webpack配置按需加载
const page1 = r => require.ensure([], () => r(require('../page/page1')),'page1')

export default [{
    path:'/',
    component:App,
    children:[
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/page1',
            component:page1
        }
    ]

}]