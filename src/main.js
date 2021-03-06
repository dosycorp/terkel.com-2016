import { sync } from 'vuex-router-sync';
import store from 'vuex/store';
import VueRouter from 'vue-router';

import App from 'components/App';
import Case from 'components/Case';
import CV from 'components/CV';

// eslint-disable-next-line
import gsap from 'gsap';

Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  history: true,
  pushstate: true
});

sync(store, router);

router.map({
  '/': {
    name: 'home',
    index: 0,
    component: {}
  },
  '/cases': {
    name: 'cases',
    index: 1,
    component: {}
  },
  '/cases/:case': {
    name: 'case',
    index: 1,
    secondary: true,
    component: Case
  },
  '/about': {
    name: 'about',
    index: 2,
    component: {}
  },
  '/about/cv': {
    name: 'cv',
    index: 2,
    secondary: true,
    component: CV
  },
  'contact': {
    name: 'contact',
    index: 3,
    component: {}
  }
});

// TODO: Implement 404 here
router.redirect({
  '*': '/'
});

router.start(App, '#app');
