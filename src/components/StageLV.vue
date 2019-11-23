<!-- eslint-disable -->
<template>
    <div id="stage">
        <div class="container">


            <div class="jumbotron">
                <h1 class="title-stage text-light wow animated fadeIn">
                    STAGE
                    <br>
                    LINKVALUE
                </h1>
            </div>

            <br><br><br><br>
            <div class="row">
                <div class="col-md-4">
                    <img src="../assets/img/linkvalue.png" class="my-shadow wow animated fadeInLeft img-fluid"
                         alt="linkvalue">
                    <br><br><br><br><br>
                    <img id="img1" src="../assets/img/tchat1.png" class="my-shadow wow animated fadeInLeft img-fluid"
                         alt="stack">
                    <br><br><br><br><br>
                    <img id="img2" src="../assets/img/tchat2.png" class="my-shadow wow animated fadeInLeft img-fluid"
                         alt="stack">
                    <br><br><br><br><br>
                    <img id="img3" src="../assets/img/tchat3.png" class="my-shadow wow animated fadeInLeft img-fluid"
                         alt="stack">
                </div>
                <div class="col-md-8 fadeInRight wow animated justify">
                    <h2 class="wow animated fadeIn text-light">LinkValue</h2>
                    <a class="wow animated fadeIn lien" href="https://link-value.fr/fr">https://link-value.fr/fr</a>
                    <br><br>
                    <p class="wow animated fadeIn">
                        LinkValue est une entreprise de développement informatique qui sépare
                        ses activités en trois.
                    </p>
                    <br>
                    <hr>
                    <br>
                    <h4 class="wow animated fadeIn text-light">Lab</h4>
                    <p class="wow animated fadeIn">
                        Le Lab est le cœur de la société, chaque Partner consacre 10% de son
                        temps à la R&amp;D.
                        Tous les mois, 2 jours sont dédiés à appréhender les évolutions technos
                        en travaillant sur des projets allant du développement d‘outils à la
                        création de prototypes.
                    </p>
                    <br>
                    <hr>
                    <br>
                    <h4 class="wow animated fadeIn text-light">Booster</h4>
                    <p class="wow animated fadeIn">
                        L'entreprise développent des projets pour des clients en suivant l'une de
                        ces deux méthodologies : La méthode Agile et la méthode Cadrée.
                    </p>
                    <br>
                    <hr>
                    <br>
                    <h4 class="wow animated fadeIn text-light">Conseil</h4>
                    <p class="wow animated fadeIn">
                        L'expertise de LinKValue est mise au service du client avec
                        l'intervention direct sur les environnement du client sur différent
                        secteurs du développement à savoir le web, mobile, l'ingénérie
                        systeme et de la Data Science.
                    </p>
                    <br>
                    <hr>
                    <br>
                    <h4 class="wow animated fadeIn text-light">Patrimoine informatique</h4>
                    <p class="wow animated fadeIn">
                        L'entreprise emploie des 20 aines d'employers dans leurs studios à Lyon.
                        Chaque employé travaille sur Mac Book Pro avec un deuxième écran sur son poste de travail personnel.

                    </p>

                    <br>
                    <hr>
                    <br>
                    <h3 class="wow animated fadeIn text-light">La STACK Technique de LinkValue</h3>
                    <br>
                    <img src="../assets/img/stack.png" class="my-shadow" alt="stack">
                    <br>
                    <br>
                    <hr>
                    <br>
                    <h4 class="wow animated fadeIn text-light">Mon expérience</h4>
                    <p class="wow animated fadeIn">
                        Dans le cadre de mon BTS SIO à Sciences-U, j'ai réalisé à
                        la fin de ma première année un stage chez Linkvalue pendant 6 semaines.
                        J'ai tout d'abord eu pour tâche de déboguer un projet interne en PHP
                        sur le framework Laravel et VueJS. Puis pendant les 5 semaines restantes,
                        j'ai créé une messagerie instantanée en NodeJs en Back et VueJs en Front.
                    </p>
                    <br><br>
                </div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide carousel-stage" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row row-carousel">
                            <div class="col-md-12 wow animated fadeInRight">
                                <img src="../assets/img/tchat1.png" class="img-carousel" alt="stack">
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="row row-carousel">
                            <div class="col-md-12 wow animated fadeInLeft">
                                <img src="../assets/img/tchat2.png" class="img-carousel" alt="stack">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row row-carousel">
                            <div class="col-md-12 wow animated fadeInRight">
                                <img src="../assets/img/tchat3.png" class="img-carousel" alt="stack">
                            </div>
                        </div>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                   data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <a href="https://github.com/MilletMorgan/nodeJS-chat">
                <div class="link-button shadow-hover make-it-slow wow animated fadeIn">
                    <button class="link-button2">
                        Consulter le projet sur Github
                    </button>
                </div>
            </a>
        </div>
    </div>
    </div>


</template>


<script>

    export default {
        name: "StageLV",
    }
</script>

<style scoped>

</style>