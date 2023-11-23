// createWebHashHistory: per salvare i dati nella cronologia

// createRouter: insieme di componenti e rotte

import { createWebHashHistory, createRouter } from 'vue-router';


import HomeView from "./views/HomeView.vue";

import SingleProjectView from "./views/SingleProjectView.vue"

import ContactsView from "./views/ContactsView.vue"

import OurTeam from "./views/OurTeam.vue"

import NotFound from "./views/NotFound.vue"





// creiamo la rotta per la pagina home

const routes = [

    // ricordarsi di far iniziare il path con /

    { path: '/', name: 'home', component: HomeView },

    {
        path: '/project/:id',

        name: 'project',

        component: SingleProjectView,
    },

    {
        path: '/about',

        name: 'about',

        component: OurTeam,
    },

    {
        // creo il percorso web per la pagina di errore
        
        path: '/:pathMatch(.*)*',

        name: 'NotFound',

        component: NotFound,
    }
]

// creo la rotta

const router = createRouter({

    history: createWebHashHistory(),

    routes
});

export { router };