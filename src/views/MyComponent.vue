<template>
    <div class="c"><!--父組件 傳遞給 子組件-->
        <!-- 父組件add 接收子組件傳遞的內容 -->
        <nav-header @add="add"></nav-header>
        <!-- 通過父組件動態綁定list 傳給子組件 -->
        <!-- 通過父組件綁定del 傳給子組件 -->
        <nav-main :list='list' @del="del"></nav-main>
        <!-- 通過父組件動態綁定list 傳給子組件 -->
        <!-- 通過父組件綁定clear 傳給子組件 -->
        <nav-footer :list='list' @clear="clear"></nav-footer>
    </div>
   
</template>

<script>

    
          
//引入子組件
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

///定義組件，所有東西都是從vue中解構出來
//computed 計算屬性
import { defineComponent, ref, computed } from 'vue'

//useStore 會返回 store文件夾裡 狀態管理createStore裡的list
import { useStore } from 'vuex'

//組件通過export default導出defineComponent方法，之後就能在其他組件引用了
export default defineComponent({  //配置組件
    name: 'MyComponent', 
    components: { //掛載
        NavHeader,
        NavMain,
        NavFooter
    },
    setup() {

        let value = ref('')
        //添加任務
        let add = (val) => {
            value.value = val
            //先判斷有沒有已經存在的事項 若已有則不能重複添加
            let flag = true  //先默認沒有重複
            //判斷是否重複用map 拿計算屬性的值要先.value.map
            list.value.map(item => {
                //有重複的任務時
                if (item.title === value.value) {
                    flag = false //有重複
                    alert('事項已經重複了！！') //彈出提示框
                }
            })

            //沒有重複的任務時
            if (flag) { //flag=true

                //添加任務
                //commit調用store裡的 mutation方法 把新增的事情加入list
                store.commit('addTodo', {
                    title: value.value,
                    complete: false
                })

            }
            console.log(val)
        }

        //刪除任務
        let del = (val) => {
            //commit調用store的刪除delTodo方法
            store.commit('delTodo', val)
            console.log(val)
        }

        //清除已完成
        let clear = (val) => {
            //commit調用store的清除clear方法
            store.commit('clear', val)
        }


        //使用計算屬性computed 拿store的list
        let store = useStore()
        let list = computed(() => {
            return store.state.list
        }
        )

        return {
            add,
            value,
            list,
            del,
            clear

        }


    }


})
</script>

<style scoped lang="scss">
*{
    font-size: 24px;//list字體大小
}
.c {

    ///喬位置/////////////////
    position: absolute;
    left: 35%;
    top: 20%;
    margin-left: -35px;
    margin-top: -20px;
    /////////////////////////
    

}
</style>
