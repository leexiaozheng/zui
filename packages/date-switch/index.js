import pDateSwitch from './src/index.vue';

// 支持按需引用
pDateSwitch.install = function(Vue) {
    Vue.component(pDateSwitch.name, pDateSwitch);
};

export default pDateSwitch;
