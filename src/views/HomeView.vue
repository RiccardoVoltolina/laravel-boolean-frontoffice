<script>

import axios from 'axios';




export default {


    name: 'HomeView',
    data() {
        return {

            base_url: 'http://localhost:8000',

            cocktails_url: '/api/cocktails',

            cocktails: [],

        }
    },

 
    mounted() {

        // richiamo la funzione per la mia chiamata

        this.axiosCall()

    },

    methods: {

  

        // eseguo la chiamata axios

        axiosCall: function () {
            axios.get(this.base_url + this.cocktails_url)
                .then(response => {



                    this.cocktails = response.data.result

                })
                .catch(err => {
                    console.error(err);
                })
        }

    },
}
</script>

<template>
    <div id="app">

    <h1>ciao</h1>

       


    </div>
</template>

<style></style>


