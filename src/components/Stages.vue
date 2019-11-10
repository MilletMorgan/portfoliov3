<!-- eslint-disable -->

<template>
    <div id="stage">
        <h1 class="title text-light wow animated fadeIn">STAGE</h1>
        <h2 class="text-light wow animated fadeIn">Entreprise de stage</h2>
        <br><br><br><br>
        <div class="row">
            <div class="col md-6">
                <div class="row">
                    <div class="col-md-5">
                        <img src="../assets/img/linkvalue.png"
                             class="wow animated fadeInLeft my-shadow full-width"
                             alt="linkvalue">
                    </div>
                    <div class="col-md-7 fadeInLeft wow animated justify">
                        <h2 class="wow animated fadeIn text-light">LinkValue</h2>
                        <a class="wow animated fadeIn" href="https://link-value.fr/fr">https://link-value.fr/fr</a>
                        <br>
                        <br><br>
                        <p class="wow animated fadeIn">
                            LinkValue est une entreprise de développement informatique qui sépare
                            ses activités en trois.
                        </p>
                        <br><br>
                        <router-link class="nav-item nav-link" to="/stagelv">
                            <div class="link-button shadow-hover make-it-slow wow animated fadeIn">
                                <button class="link-button2">
                                    En savoir plus sur LinkValue
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col md-6">
                <div class="row">
                    <div class="col-md-5">
                        <img src="../assets/img/logo.png" class="my-shadow wow animated fadeInLeft full-width"
                             alt="logo">
                    </div>
                    <div class="col-md-7 fadeInRight wow animated justify">
                        <h2 class="wow animated fadeIn text-light">Stage 2</h2>
                        <a class="wow animated fadeIn" href="https://link-value.fr/fr">lien site deuxième stage</a>
                        <br>
                        <br><br>
                        <p class="wow animated fadeIn">
                            description stage 2.
                        </p>
                        <br><br><br>
                        <router-link class="nav-item nav-link" to="#">
                            <div class="link-button shadow-hover make-it-slow wow animated fadeIn">
                                <button class="link-button2">
                                    En savoir plus sur le stage 2
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stages'
    };
</script>

<style scoped>

</style>
