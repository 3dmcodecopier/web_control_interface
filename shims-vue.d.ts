/*import VueRouter, {Route} from'vue-router'
import Vue from 'vue'
declare module 'vue/types/vue' {

    interface Vue {

        $router: VueRouter;

        $route: Route;

    }

}*/
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

//declare module 'vue-router';

declare module 'pubsub-js';

declare module "vue-video-player";

declare module  "vuejs-progress-bar";

declare module "vue-js-toggle-button";

