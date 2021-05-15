import Vue from "vue";
import Router from "vue-router";
import home from "@/components/HelloWorld";
import hello from "@/components/Hello";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/blog",
      name: "blog",
      component: hello
    }
  ]
});
