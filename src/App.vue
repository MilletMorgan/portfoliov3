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
