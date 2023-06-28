<template>
    <!-- 開始的主頁 -->
    <div class="b">
        VUE3<br>
        TODOLIST<br><br>
        <button @click="start">START</button>
    </div>
</template>

<script>
//用組件
import { defineComponent, ref } from 'vue'
//用路由
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'FirstSee',
    setup() {
        //router：全局路由對象  route：當前路由對象
        let router = useRouter()
        let start = () => {
            //點按鈕 路由就會跳轉到MyComponent頁面！！
            // push方法
            router.push({
                path: '/MyComponent'
            })
        }

        return {
            start,
        }

    }
})
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

* {
    font-family: 'Amatic SC', cursive;
    font-size: 20px;
    letter-spacing: 1.5px;
    /*文字間距*/

}

.b {

   font-size: 40px;
    

    /// div 置中！////////////
    position: absolute;
    left: 50%;
    top: 40%; 
    margin-left: -50px; 
    margin-top: -50px;
    /////////////////////////
}

.b>button {

    width: 100px;
    height: 50px;
    background-color: bisque;
    color: #E9967A;
    border-radius: 10px;
    /*圓角*/
}

.b :hover {

    transform: scale(1.2);
    /*按鈕放大設定*/
    transition: all 1s;
    cursor: pointer;

    background-color:#E9967A;
    color: bisque;

}</style>