import pPictureSelect from './src/index.vue';

// 支持按需引用
pPictureSelect.install = function(Vue) {
    Vue.component(pPictureSelect.name, pPictureSelect);
};

export default pPictureSelect;
