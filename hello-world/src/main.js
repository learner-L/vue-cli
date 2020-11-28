import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
/* TODO:这里需要调整一下，用于测试TODO方法到时候再对接的时候注意一下 */

/* FIXME:这是很重要的一块，需要注意以下 用于测试FIXME规范*/

new Vue({
    render: (h) => h(App),
}).$mount("#app");