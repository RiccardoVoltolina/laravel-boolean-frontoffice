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
            <p class="text-decoration-underline">share our work, don't miss the drinks coming soon by following us on social network.</p>
            <div class="row">
                <div class="col-3">
                    <div class="card border-0">
                        <img class="card-img-top" src="https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2017/04/negroni-cocktail-ricetta.jpg" alt="Negroni">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card border-0">
                        <img class="card-img-top" src="https://winedharma.com/wine-dharma/uploads/2020/10/Long-Island-iced-tea-cocktail-ricetta-ingredienti-dosi-e-la-storia.jpg" alt="Long Island Ice Tea">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card border-0">
                        <img class="card-img-top" src="https://media-assets.lacucinaitaliana.it/photos/61fa990eae710c29191814f3/3:2/w_846,h_564,c_limit/I-migliori-cocktail-a-base-di-wishky.jpg" alt="Whisky">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card border-0">
                        <img class="card-img-top" src="https://www.buttalapasta.it/wp-content/uploads/2016/08/ricetta-mojito.jpg" alt="Mojito">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="social bg-dark py-5">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <div class="card bg-transparent">

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bar">
        <div class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="card text-white bg-transparent border-0 rounded-0">

                            <h4 class="mb-3">Subscribe to the newsletter and meet Us</h4>
                            <form action="">

                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" name="email" id="email" class="form-control" placeholder="email@example.com" aria-describedby="emailHelper">
                                </div>

                                <button type="submit" class="btn btn-primary">Subscribe</button>
                            </form>

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
.bar{
    background-image: url(https://images.squarespace-cdn.com/content/v1/53162615e4b08f2413caa7c2/1433114543363-JZNJMLXI1Q29P6X9TQJ4/hemingway-bar-prague);
    background-size: cover;
    background-position: center;
    padding: 200px 0;
}

</style>