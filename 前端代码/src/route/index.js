import {
    ElMessage
} from 'element-plus'
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import {
    store
} from '../../store'
const routes = [{
        path: '/',
        redirect: 'Home',
    },
    
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [{
                path: '/clientManagement',
                name: 'ClientManagement',
                component: () => import('../views/ClientManagement.vue')
            },
            {
                path: '/managecus',
                name: 'managecus',
                component: () => import('../views/ManagerCus.vue')
            },
            {
                path: '/show',
                name: 'Show',
                component: () => import('../views/ShowOpp.vue'),
                children: [{
                    path: '/create',
                    name: 'Create',
                    component: () => import('../views/CreateOpp.vue')
                }]

            },


            {
                path: '/mycus',
                name: 'Showcus',
                component: () => import('../views/Customer.vue')
            },
            {
                path: '/approve',
                name: 'approve',
                component: () => import('../views/Approve.vue')
            },
            {
                path: '/depopp',
                name: 'depopp',
                component: () => import('../views/DepOpp.vue')
            },
            {
                path: '/transfercus',
                name: 'transfercus',
                component: () => import('../views/TransferCus.vue')
            },
            {
                path: '/track',
                name: 'track',
                component: () => import('../views/TrackOpp.vue'),
                children: [{
                    path: '/edit',
                    name: 'edit',
                    component: () => import('../views/EditTrack.vue')
                }, ]
            },
            {
                path: '/salesrecord',
                name: 'salesrecord',
                component: () => import('../views/SalesRecord.vue')
            },
            {
                path: '/searchSalesrecord',
                name: 'searchsalesrecord',
                component: () => import('../views/SearchSalesRecord.vue')
            },
            {
                path: '/searchTransferCus',
                name: 'searchtransfercus',
                component: () => import('../views/SearchTransferCus.vue')
            },
            {
                path: '/chat',
                name: 'chat',
                component: () => import('../views/Chat.vue')
            },
        ],
        
    },
    
    // {
    //     path:'/load',
    //     name:'Load',
    //     component:()=>import('../views/load.vue')
    // },
    // {
    //     path:'/home',
    //     name:'Home',
    //     component: Home
    // },

]

const constantRoutes= [{
    
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    
},]
const router = createRouter({
    history: createWebHashHistory(),
    routes: [...routes,...constantRoutes]
})

const whiteList = ['/login']

//路由守卫
router.beforeEach(async (to, from, next) => {
    
    console.log(store.state.user.roles)
    if (!!store.state.user.token) {
        if (to.path === '/login') {
            next({
                path: '/'
            })
        } else {
            if (store.state.user.roles.length === 0) {
                store.dispatch('loginFail').then(() => {
                    ElMessage.error('Undefined user')
                    next({
                        path: '/login'
                    })
                })
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
    next()
})

// router.beforeEach(async (to, from, next) => {
//     // 第一次登录成功时获取userRole
//     if (store.state.role === '') {
//         await store.dispatch('getUserRole')
//     }
//     let data = {'to': to, 'userRole': store.state.userRole, isPowerful: ''}
//     await store.dispatch('confirmUserPower', data)
//     if (to.matched.length === 0) {
//         // 没有相应路由无法跳转，返回至当前页面或首页
//         from.path ? next({path: from.path}) : next('/');
//     } else if (store.state.isPowerful) {
//         // 路由存在且有权限才能跳转至相应路由页面
//         next();
//     } else {
//         // 路由存在且无权限不能跳转，返回至当前页面或首页
//         from.path ? next({path: from.path}) : next('/');
//     }
// });

export {routes, router, constantRoutes};