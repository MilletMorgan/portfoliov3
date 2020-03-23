import Vue from 'vue';
import Router from 'vue-router';
import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Competences from "./components/Competences";
import Veilles from "./components/Veilles";
import VeilleJuri from "./components/VeilleJuri";
import VeilleTech from "./components/VeilleTech";
import Stages from "./components/Stages";
import StageLV from "./components/StageLV";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";
import Svg from './components/includes/Svg'
import StagePS from './components/StagePS'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'presentation',
            component: Presentation,
            props: true,
            children: [{
                path: 'svg',
                components: Svg
            }]
        },
        {
            path: '/experiences',
            name: 'experiences',
            component: Experiences,
            props: true
        },
        {
            path: '/competences',
            name: 'competences',
            component: Competences,
            props: true
        },
        {
            path: '/formations',
            name: 'formations',
            component: Formations,
            props: true
        },
        {
            path: '/veilles',
            name: 'veilles',
            component: Veilles,
            props: true
        },
        {
            path: '/veilletech',
            name: 'veilleTech',
            component: VeilleTech,
            props: true
        },
        {
            path: '/veillejuri',
            name: 'veilleJuri',
            component: VeilleJuri,
            props: true
        },
        {
            path: '/stages',
            name: 'stages',
            component: Stages,
            props: true
        },
        {
            path: '/stagelv',
            name: 'stage',
            component: StageLV,
            props: true
        },
        {
            path: '/stageps',
            name: 'stage',
            component: StagePS,
            props: true
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
            props: true
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            props: true
        }
    ]
});

export default router;