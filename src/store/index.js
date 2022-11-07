import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from "axios";
import router from "@/router";

const store = createStore({
  state: {
    currencies_from_data: [],
    currencies_to_data : [],
    active_from_id: 0,
    active_to_id:0,
    rates_result: [],

  },
  mutations: {
    setCurrenciesLists(state, payloads){
      state.currencies_from_data = payloads
      state.currencies_to_data = Object.assign([], payloads)
      state.currencies_from_data.sort(function(a, b){
        return parseInt(b.rate_from_count) - parseInt(a.rate_from_count)
      })
      state.currencies_to_data.sort(function(a, b){
        return parseInt(b.rate_to_count) - parseInt(a.rate_to_count)
      })
    }

  },
  actions: {
    fetchCurrenciesLists(context){

      axios.get('http://127.0.0.1:8000/digimon/api/currencies/')
        .then(response => context.commit("setCurrenciesLists", response.data))

    }
  },
  getters:{
    getCurrenciesFromLists(state){
      return state.currencies_from_data
    },
    getCurrenciesToLists(state){
      return state.currencies_to_data
    }

  }
})

export default store;
