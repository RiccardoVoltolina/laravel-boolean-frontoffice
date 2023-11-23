        
<script>
export default {

}
</script>

<template>



    <!-- Form Name -->
    <form action="post">
        
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Marco" aria-describedby="NameHelpId">
            <small id="NameHelpId" class="text-muted">Your Name</small>
        </div>

    </form>


    <!-- Form Surname -->
    <form action="post">

        <div class="mb-3">
            <label for="name" class="form-label">Surname</label>
            <input type="text" Surname="Surname" id="Surname" class="form-control" placeholder="Rossi" aria-describedby="SurnameHelpId">
            <small id="SurnameHelpId" class="text-muted">Your Surname</small>
        </div>

    </form>

    <!-- Form Email -->
    <form action="post">

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" Surname="email" id="email" class="form-control" placeholder="marco_rossi@example.com" aria-describedby="emailHelpId">
            <small id="emailHelpId" class="text-muted">Your Email</small>
        </div>

    </form>

</template>

<style lang="sass" scoped>

</style>