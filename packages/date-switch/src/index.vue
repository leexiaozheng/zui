<template>
<div class="p-date-switch">
    <ul class="wrap">
        <li :class="e.value === value ? 'active': ''"
            v-for="e of data"
            :key="e.value"
            @click="$emit('input', e.value)">{{e.label}}</li>
    </ul>
</div>
</template>
<script>
export default {
    name: 'pDateSwitch',
    props: {
        value: {
            type: [Number, String],
            default: ''
        },
        data: {
            type: Array,
            default: () => [{ label: '1月', value: 1 }]
        }
    }
};
</script>
<style lang="scss" scoped>
.p-date-switch {
    display: inline-block;
    .wrap {
        display: flex;
        margin: 0;
        padding: 0;
        position: relative;
        z-index: 1px;
        list-style: none;
        li {
            padding: 0px 8px;
            background: #e2eefb;
            border-left: 1px solid #d6e7f9;
            line-height: 20px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: rgba(32,128,247,0.55);
            &:first-child {
                border-left: none;
            }
            cursor: pointer;
            &.active {
                color: #fff;
                background: #5ca0f4;
                border-color: #5ca0f4;
            }
        }
    }
}
</style>