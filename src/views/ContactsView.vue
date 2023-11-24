    
<script>
export default {

}
</script>

<template>

    <section id="contacts" class="py-5 text-white fs-4">

        <div class="container w-50">

            <div class="container text-center text-white pt-5">
                Subscribe your email for add Our Team & receive the newsletters
            </div>

            <!-- Form Name -->
            <form action="post">

                <div class="pt-5 mb-3">
                    <label for="name" class="form-label">Your Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Marco"
                        aria-describedby="NameHelpId">
                </div>

            </form>

            <!-- From Surname -->
            <form action="post">

                <div class="mb-3">
                    <label for="Surname" class="form-label">Your Surname</label>
                    <input type="text" name="Surname" id="Surname" class="form-control" placeholder="Rossi"
                        aria-describedby="SurnameHelpId">
                </div>

            </form>

            <!-- Form Email -->
            <form action="post">

                <div class="mb-3">
                    <label for="Email" class="form-label">Your Email</label>
                    <input type="email" name="Email" id="Email" class="form-control" placeholder="marcorossi@example.com"
                        aria-describedby="EmailHelpId">
                </div>

            </form>

            <!-- Btn for to send your name, surname and email -->
            <a class="btn btn-warning mt-4">Subscribe</a>

        </div>

    </section>

</template>

<style lang="scss" scoped>
#contacts {
    background-image: url('https://images.squarespace-cdn.com/content/v1/53162615e4b08f2413caa7c2/1433114543363-JZNJMLXI1Q29P6X9TQJ4/hemingway-bar-prague');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 100vh;
}
</style>