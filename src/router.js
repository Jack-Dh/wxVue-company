import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import framework from './views/framework'
import ctiList from './activity/ctiList'
import MyctiList from './MyaCti/MyctiList'
import ActivitiesDetails from './MyaCti/ActivitiesDetails'
import ctiDetails from './activity/ctiDetails'
import award from './activity/award'
import ParticipateDetails from './MyaCti/ParticipateDetails'
import reload from './pulic/reload'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'reload',
            component: reload
        },
        {
            path: '/framework',
            name: 'framework',
            component: framework,
            redirect: Home,
            children: [
                {
                    path: '/Home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/ctiList',
                    name: 'ctiList',
                    component: ctiList
                },
                {
                    path: '/MyctiList',
                    name: 'MyctiList',
                    component: MyctiList
                },
                {
                    path: '/ActivitiesDetails',
                    name: 'ActivitiesDetails',
                    component: ActivitiesDetails
                }, {
                    path: '/ctiDetails',
                    name: 'ctiDetails',
                    component: ctiDetails
                }, {
                    path: '/award',
                    name: 'award',
                    component: award
                }, {
                    path: '/ParticipateDetails',
                    name: 'ParticipateDetails',
                    component: ParticipateDetails
                }

            ]
        },

        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
