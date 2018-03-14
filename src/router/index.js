import Documentation from '@/pages/Documentation'
import Components from '@/pages/Components'
import Home from '@/pages/Home'
import StartTheme from '@/pages/StartTheme'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/start-theme',
            name: 'StartTheme',
            component: StartTheme
        },

        {
            path: '/documentation',
            name: 'Documentation',
            component: Documentation
        },

        {
            path: '/components',
            name: 'Components',
            component: Components
        }
    ]
})