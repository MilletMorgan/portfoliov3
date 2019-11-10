<!-- eslint-disable -->

<template>
    <div class="wow animated fadeIn veille">
        <h1 class="text-light title title-margin">VEILLES</h1>
        <h2 class="text-light">Voici mes veilles technologique et juridique.</h2>
        <br><br>
        <div class="row">
            <div class="col-md-6">
                <router-link class="nav-item nav-link" to="/veilletech">
                    <div class="link-button shadow-hover make-it-slow wow animated fadeIn">
                        <button class="link-button2">
                            VEILLE TECHNOLOGIQUE
                        </button>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6">
                <router-link class="nav-item nav-link" to="/veillejuri">
                    <div class="link-button shadow-hover make-it-slow wow animated fadeIn">
                        <button class="link-button2">
                            VEILLE JURIDIQUE
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Veilles'
    };
</script>

<style scoped>

</style>
