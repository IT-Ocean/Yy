// 引入vue 和 Vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 在vue中使用Vuex
Vue.use(Vuex);

// 将 store 分割成模块（module）
const store = new Vuex.Store({
  state: {
    showFooter: true,
    changebleNum: 3
  },
  getters: {
    isShow(state){
      return state.showFooter;
    },
    getChangedNum(state){
      return state.changebleNum;
    }
  },
  mutations: {
    show(state){
      state.showFooter = true;
    },
    hide(state){
      state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
      state.changebleNum += sum;
    }
  },
  actions: {
    hideFooter(context){
      context.commit('hide')
    },
    showFooter(context) {  //同上注释
      context.commit('show');
    },
    getNewNum(context,num){   //同上注释，num为要变化的形参
      context.commit('newNum',num)
    }
  },

});

export default store
