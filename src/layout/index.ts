import PageHeader from "./PageHeader/index.vue";
import PageAdd from "./PageAdd/index.vue";
import PageList from "./PageList/index.vue";

export default {
  install(Vue: any): void {
    Vue.component("PageHeader", PageHeader);
    Vue.component("PageAdd", PageAdd);
    Vue.component("PageList", PageList);
  },
};
