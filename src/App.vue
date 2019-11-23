<!-- eslint-disable -->
<template>
    <div id="app">
        <div class="wrapper">
            <nav id="sidebar">
                <div class="animated fadeInLeftBig">
                    <div class="sidebar-header">
                        <router-link to="/" class="item-list"><h3>MORGAN MILLET</h3></router-link>
                    </div>

                    <ul class="list-unstyled components">
                        <li class="list-item">
                            <router-link to="/" class="item-list">PRESENTATION</router-link>
                        </li>
                        <hr>
                        <li class="list-item">
                            <router-link to="/experiences" class="item-list">EXPERIENCES</router-link>
                        </li>
                        <hr>
                        <li class="list-item">
                            <router-link to="/formations" class="item-list">FORMATIONS</router-link>
                        </li>
                        <hr>
                        <li class="list-item">
                            <router-link to="/competences" class="item-list">COMPETENCES</router-link>
                        </li>
                        <hr>
                        <li class="list-item">
                            <router-link to="/veilles" class="item-list">VEILLES</router-link>
                        </li>
                        <hr>
                        <li class="list-item">
                            <router-link to="/stages" class="item-list">STAGES</router-link>
                        </li>
                        <hr>
                        <li class="list-item">
                            <router-link to="/portfolio" class="item-list">PROJETS</router-link>
                        </li>
                        <hr>
                        <li class="list-item">
                            <router-link to="/contact" class="item-list">CONTACT</router-link>
                        </li>
                    </ul>
                </div>

            </nav>

            <!--
            <nav class="navbar navbar-right navbar-expand-sm flex-nowrap sticky-top">
                        <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar5">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <span class="navbar-brand w-100">
                            <router-link class="nav-item nav-link" to="/">MILLET MORGAN</router-link>
                        </span>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <router-link class="nav-item nav-link" to="/">PRESENTATION</router-link>
                                <router-link class="nav-item nav-link" to="/experiences">EXPERIENCES</router-link>
                                <router-link class="nav-item nav-link" to="/formations">FORMATIONS</router-link>
                                <router-link class="nav-item nav-link" to="/competences">COMPETENCES</router-link>
                                <router-link class="nav-item nav-link" to="/veilles">VEILLES</router-link>
                                <router-link class="nav-item nav-link" to="/stages">STAGES</router-link>
                                <router-link class="nav-item nav-link" to="/portfolio">PORTFOLIO</router-link>
                                <router-link class="nav-item nav-link" to="/contact">CONTACT</router-link>
                            </div>
                        </div>

                        <div class="w-100"></div>
            </nav>
        -->

            <div id="content">
                <router-view/>
            </div>
        </div>


    </div>
</template>

<script>
    import Presentation from './components/Presentation';
    import JQuery from 'jquery'

    let $ = JQuery;

    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    export default {
        data: function () {
            return {
                targetId: null,
                componentName: Presentation
            };
        },
        methods: {
            select(event) {
                this.componentName = event.currentTarget.id;
                console.log(this.componentName);
            }
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap');
</style>
