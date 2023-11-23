// createWebHashHistory: per salvare i dati nella cronologia

// createRouter: insieme di componenti e rotte

import { createWebHashHistory, createRouter } from 'vue-router';


import HomeView from "./views/HomeView.vue";

import AppHeader from "./components/AppHeader.vue";







// creiamo la rotta per la pagina home

const routes = [

    // ricordarsi di far iniziare il path con /

    { path: '/', component: HomeView },

    {
        path: '/drinks/:id',

        name: 'drink',

        component: AppHeader,
    },

   
]

// creo la rotta

const router = createRouter({

    history: createWebHashHistory(),

    routes
});

export { router }