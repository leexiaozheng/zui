<template>
    <div class="p-picture-select" :style="{ width: width + 'px', height: height + 'px' }">
        <div class="content">
            <i class="h-icon-add"></i>
            <div>以脸搜脸</div>
            <input class="file-input" ref="file" type="file" :accept="type" @change="change" />
        </div>

        <div class="img-wrap" v-if="value">
            <img :src="value" :width="width" :height="height" />
            <i class="clear-btn" @click="clear">X</i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pPictureSelect',
    data() {
        return {
            type: 'image/jpeg,image/jpg,image/jpe,image/jfif,image/png',
            desc: '.jpeg/.jpg/.jpe/.jfif/.png',
        };
    },
    props: {
        value: { type: String, Number },
        width: { type: Number, default: 128 },
        height: { type: Number, default: 128 },
    },
    methods: {
        change(e) {
            const file = e.target.files[0];
            if (!this.type.split(',').includes(file.type)) {
                this.$msgbox({
                    title: '无法上传',
                    message: `该格式的文件不支持上传，请选择${this.desc}格式的文件`,
                    type: 'error',
                });
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.$emit('input', e.target.result);
                this.$emit('change', file);
            };
        },
        clear() {
            this.$refs.file.value = '';
            this.$emit('input', '');
            this.$emit('change', null);
        },
    },
};
</script>
<style lang="scss" scoped>
.p-picture-select {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    border: 1px dashed rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    background-color: #ececec;
    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        i {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.4);
        }
        div {
            margin-top: 10px;
            font-family: Microsoft YaHei;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.4);
            letter-spacing: 0;
            text-align: center;
            line-height: 20px;
        }
    }
    .file-input {
        position: absolute;
        width: 400%;
        height: 400%;
        opacity: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
    }
    .img-wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .clear-btn {
            position: absolute;
            right: -10px;
            top: -10px;
            font-size: 12px;
            width: 16px;
            height: 16px;
            border: 1px solid #b3b3b3;
            border-radius: 8px;
            color: #b3b3b3;
            cursor: pointer;
            font-style: normal;
            line-height: 16px;
            text-align: center;
        }
    }
}
</style>
