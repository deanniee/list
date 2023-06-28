<template>
    <div v-if="list.length > 0"> <!-- list裡面有代辦項目 -->
        <div v-for="(item, index) in list" :key="index">
            <div class="item">
                <input type="checkbox" v-model="item.complete">
                {{ item.title }}
                <button class="del" @click="del(item, index)"> DELETE </button>
            </div>
        </div>
    </div>
    <div v-else class="m"><!-- list裡面沒東西 -->
        MISSION COMPLETED~ !!沒事情拉～～
        
    </div>
</template>

<script>

import { defineComponent, ref } from 'vue'
/* import {useStore} from 'vuex' */
export default defineComponent({
    name: 'navMain',

    //props接收父組件傳遞過來的屬性list
    props: {
        list: {
            type: Array,
            required: true //必須傳遞
        }
    },
    //將del放在數組裡
    emits: ['del'],

    setup(props, ctx) {
        //

        //刪除事項
        let del = (item, index) => {
            //.emit 分發事件
            ctx.emit('del', index)

        }
        return {
            del
        }
    }

})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

* {
    font-family: 'Amatic SC', cursive;

}

/* input {
    
    margin-bottom: 30000px;
} */

.item {
    height: 50px;
    line-height: 35px;
    position: relative;
    width: 410px;

    button {
        background-color: #e78787e2;
        border: none;
        border-radius: 10px;
        width: 50px;
        height: 37px;
        font-size: 23px;

        color: #f1d2d2;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 6px;
        z-index: 99;
        display: none;
    }

    &:hover {
        background-color:#f9ab8ec5	;

        button {
            display: block;
        }
    }
}

.m{
        color: #e78787e2;
        font-size: 34px;
        
    }
</style>