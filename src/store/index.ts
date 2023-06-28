//createStore 創建一個狀態管理
import { createStore } from 'vuex'

//export default導出createStore
export default createStore({
  //state 定義需要的狀態 ex:name
  //之後useStore通過computed拿到list
  state: {
    list: [
      {
        title: 'EAT',
        complete: false
      },
      {
        title: 'SLEEP',
        complete: false
      },
      {
        title: 'DRINK',
        complete: false
      },
    ]

  },
  getters: {
  },

  //mutations 同步修改state 裡面放方法
  //第一個參數state 第二個參數是需要修改的值
  mutations: {

    //添加任務方法
    addTodo(state,payload) {
      state.list.push(payload)
    },

    //刪除任務方法 splice(下標, 個數)
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },

    //清除已完成方法
    clear(state, payload) {
      //把過濾之後的數組傳進來
      state.list = payload
    }
  },

  //actions 異步提交mutations
  //第一個參數是store 第二個參數是修改的值
  //store.commit() 提交mutation 調用mutation的方法
  actions: {
  },
  //模塊化
  modules: {
  }
})
