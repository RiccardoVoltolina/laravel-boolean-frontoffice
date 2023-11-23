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


        },

        


    },


}
</script>

<template>
    <div id="app">

        <div class="container">
            <h1>Drinks:</h1>



            <div class="row row-cols-lg-3">
                <div class="col" v-for="cocktail in cocktails">
                    <div class="py-3 h-100">

                        <div class="card h-100 text-center">
                            <div class="img_container">
                                <img :src="cocktail.drinkThumb" alt="...">
                            </div>
                            <h2>{{ cocktail.name }}</h2>
                            <p>{{ cocktail.type }}</p>
                            <p>{{ cocktail.instructions }}</p>

                            <div v-for="ingredient in cocktail.ingredients">
                                <div>{{ ingredient.name }}</div>
                                <div>{{ ingredient.measure }}</div>
                            </div>

                            <small>{{ cocktail.glass }}</small>
                        </div>
                    </div>
                </div>



            </div>
        </div>



    </div>
</template>

<style>
.img_container {

    width: 100%;
    height: 300px;


}

.img_container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>


