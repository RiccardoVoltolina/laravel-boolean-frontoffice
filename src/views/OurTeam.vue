<script>
export default {
    
}
</script>

<template>
    <section class="bg-dark" id="team-banner">

        <div class="container text-white py-5">            
            <h2 class="pb-3">Our Team</h2>
            <router-link class="btn btn-primary w-25" to="/contacts">Contact Us</router-link>   
        </div>

    </section>

    <section class="drink">
        <div class="container text-center text-warning">
            <h2>Follow Us</h2>
            <p class="text-decoration-underline mb-5">share our work, don't miss the drinks coming soon by following us on social network.</p>
            <div class="row">
                <div class="col-3">
                    <router-link class="text-decoration-none" to="/">
                        <h5 class="text-success">Coming soon</h5>
                        <div class="card border-0 rounded-4">
                            <img class="card-img-top rounded-4" src="https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2017/04/negroni-cocktail-ricetta.jpg" alt="Negroni">
                        </div>
                        <h3 class="text-white">Negroni</h3>
                    </router-link>    
                </div>
                <div class="col-3">
                    <router-link class="text-decoration-none" to="/">
                        <h5 class="text-success">Coming soon</h5>
                        <div class="card border-0 rounded-4">
                            <img class="card-img-top rounded-4" src="https://winedharma.com/wine-dharma/uploads/2020/10/Long-Island-iced-tea-cocktail-ricetta-ingredienti-dosi-e-la-storia.jpg" alt="Long Island Ice Tea">
                        </div>
                        <h3 class="text-white">Long Island Ice Tea</h3>
                    </router-link>    
                </div>
                <div class="col-3">
                    <router-link class="text-decoration-none" to="/">
                        <h5 class="text-success">Coming soon</h5>
                        <div class="card border-0 rounded-4">
                            <img class="card-img-top rounded-4" src="https://media-assets.lacucinaitaliana.it/photos/61fa990eae710c29191814f3/3:2/w_846,h_564,c_limit/I-migliori-cocktail-a-base-di-wishky.jpg" alt="Whisky">
                        </div>
                        <h3 class="text-white">Whisky</h3>
                    </router-link>
                </div>
                <div class="col-3">
                    <router-link class="text-decoration-none" to="/">
                        <h5 class="text-success">Coming soon</h5>
                        <div class="card border-0 rounded-4">
                            <img class="card-img-top rounded-4" src="https://www.buttalapasta.it/wp-content/uploads/2016/08/ricetta-mojito.jpg" alt="Mojito">
                        </div>
                        <h3 class="text-white">Mojito</h3>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="social bg-dark py-5">
        <div class="container text-center">
            <div class="row">
                <div class="col-2">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="bar">
        <div class="newsletter">
            <div class="container text-center">
                <div class="row">
                    <div class="col-12">
                        <div class="card text-white bg-transparent border-0 rounded-0">

                            <h3 class="mb-5">Subscribe to the newsletter and meet Us</h3>

                            <div class="d-flex justify-content-center">

                                <router-link class="text-center btn btn-primary w-25" to="/contacts">Subscribe</router-link>
                            
                            </div>
        
                        </div>
                    </div>
                </div>
                
            </div>
      </div>
    </section>

</template>

<style lang="scss" scoped>
.drink{
    background-image: url(https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2019/10/I-cocktail-piu%CC%80-famosi-al-mondo-storia-e-ricette1.jpg);
    background-size: cover;
    background-position: center;
    padding: 200px 0;
}
svg{
    fill: white;
    font-size: 2rem;
}
.bar{
    background-image: url(https://images.squarespace-cdn.com/content/v1/53162615e4b08f2413caa7c2/1433114543363-JZNJMLXI1Q29P6X9TQJ4/hemingway-bar-prague);
    background-size: cover;
    background-position: center;
    padding: 200px 0;
}

</style>