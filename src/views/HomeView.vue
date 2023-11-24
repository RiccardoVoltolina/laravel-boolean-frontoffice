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

        <section class="home_image pb-5">
            <div class="container home_image">
                <h1 class="py-5 text-white">Tanti drinks ti aspettano, vieni a scoprirli tutti!</h1>



                <div class="row g-5 row-cols-lg-3">
                    <div class="col" v-for="cocktail in cocktails">
                        <div class="">

                            <div class="card bg-black overlay text-center border-0 text-white">
                                    <img :src="cocktail.drinkThumb" alt="...">

                                <div class="shadow overflow_hidden">
                                    <h2>{{ cocktail.name }}</h2>
                                    <h5>TIPOLOGIA:</h5>

                                    <p>{{ cocktail.type }}</p>
                                    <h5>PREPARAZIONE:</h5>

                                    <p>{{ cocktail.instructions }}</p>

                                    <H5>ALCOLICO?</H5>

                                    <div class="py-2" v-if="cocktail.alcoholic == 1">Alcolico</div>

                                    <div class="d-none over_block">

                                        <h5>INGREDIENTI:</h5>

                                        <div v-for="ingredient in cocktail.ingredients">
                                            <div>{{ ingredient.name }}</div>
                                            <div>{{ ingredient.measure }}</div>
                                        </div>
                                    </div>


                                    <h5>BICCHIERE:</h5>

                                    <small>{{ cocktail.glass }}</small>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>





    </div>
</template>

<style>


img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
}

img:hover {

    display: block;
}

.overlay {
    position: relative;
}

.overlay:hover .shadow {
    display: block;
}

.shadow {
    padding: 1rem;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000c4;

}

.overflow_hidden {
    overflow-y: scroll;
}

.overflow_hidden::-webkit-scrollbar {
    display: none;

}

.home_image {

    background-image: url(https://images.squarespace-cdn.com/content/v1/53162615e4b08f2413caa7c2/1433114543363-JZNJMLXI1Q29P6X9TQJ4/hemingway-bar-prague);
    background-size: cover;
}

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


.over_block.over_block:hover {
    display: block;
}
</style>


