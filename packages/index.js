import pPictureSelect from './picture-select/index';
import pDateSwitch from './date-switch/index';

const components = [pPictureSelect, pDateSwitch];

const install = function(Vue) {
    if (install.installed) return;
    components.map((component) => Vue.component(component.name, component));
};

if (typeof window.Vue !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    pPictureSelect,
    pDateSwitch,
};
