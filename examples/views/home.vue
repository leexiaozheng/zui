<template>
    <div class="home">
        <p-picture-select v-model="picValue"></p-picture-select>
        <p-date-switch v-model="dateValue" :data="dateArr"></p-date-switch>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            picValue: '',
            dateValue: 1,
            dateArr: [
                {
                    label: '1月',
                    value: 1,
                },
                {
                    label: '2月',
                    value: 2,
                },
                {
                    label: '3月',
                    value: 3,
                },
            ],
        };
    },
    components: {},
};
</script>
