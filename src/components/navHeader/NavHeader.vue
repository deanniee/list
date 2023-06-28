<template>
    <div><!--輸入框-->

        <!--當input被觸發時，綁訂的v-model語法糖的value就會更新-->

        <!--@keyup綁定鍵盤事件.enter按enter鍵-->
        <input placeholder=" INPUT " v-model="value" @keyup.enter="enter" />

    </div>
</template>

<script>

//ref定義數據
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navHeader',
    setup(props, ctx) {

        //指定value為ref數據
        let value = ref('')

        //按enter確認 
        let enter = () => {
            //console.log(value.value);
            //把輸入框的內容傳遞給父組件
            ctx.emit('add', value.value)
            //enter後清空輸入框
            value.value = ''
        }

        return {//回傳出去value
            value,
            enter
        }

    }

})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
*{
    font-family: 'Amatic SC', cursive;
    font-size: 23px;
}
input{
    width: 403px;
    height: 40px;
}


</style>