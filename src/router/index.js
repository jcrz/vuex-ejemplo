import Vue from 'vue';
import VueRouter from 'vue-router';

import Cinema from '../components/Cinema.vue';  
import ComedyMovieList from '../components/ComedyMovieList.vue';
import FamilyMovieList from '../components/FamilyMovieList.vue';

Vue.use(VueRouter);  

export default new VueRouter({
    routes: [
        {
            path: '/', 
            name: 'Home',
            component: Cinema,
            props: true,
            children: [
                {
                    path: 'comedy',
                    component: ComedyMovieList
                },
                {
                    path: 'family',
                    component: FamilyMovieList
                }
            ]
        }
    ]
})