<template>
    <div class="container">
        <div>
            COMPLETED: {{ isComplete }} / ALL: {{ list.length }}
        </div>

        <div v-if="isComplete > 0" class="btn">
            <button @click="clear">CLEAR COMPLETED</button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
    name: 'navFooter',

    //props接收父組件傳遞過來的list
    props: {
        list: {
            type: Array,
            required: true //必須傳遞

        },
    },

    setup(props, ctx) {

        //已完成多少的數字更改
        //computed計算屬性
        let isComplete = computed(() => {
            //props接收父組件 過濾已經完成的
            let arr = props.list.filter(item => {
                return item.complete
            })
            return arr.length //回傳已完成項目的長度
        })

        //清除已完成 按鈕功能
        let clear = () => {
            //過濾未完成的項目
            let arr = props.list.filter(item => {
                return item.complete === false //未完成
            })
            //.emit 分發事件
            ctx.emit('clear', arr)
            /*  console.log('clear') */
        }

        return {
            isComplete,
            clear
        }
    }

})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

* {
    font-family: 'Amatic SC', cursive;
    font-size: 25px;
}

.container {
    display: flex;
    align-items: center;
}

.btn {
    margin-left: 140px;
}

.btn>button {
    width: 120px;
    height: 37px;
    font-size: 23px;

    border: none;
    border-radius: 10px;
    background-color: #E9967A;
    color: bisque;
    cursor: pointer;
}

</style>