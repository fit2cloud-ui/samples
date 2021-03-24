import ClickOutside from "element-ui/src/utils/clickoutside";
import Permission from "./permission";

export default {
  install(Vue) {
    Vue.directive('click-outside', ClickOutside);
    Vue.directive('has-permissions', Permission.hasPermissions);
    Vue.directive('lack-permissions', Permission.lackPermissions);
  }
}


