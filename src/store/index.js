import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
  state: {
    currencies_from_data: [],
    currencies_to_data : [],
    active_from_id: 0,
    active_to_id:0,
    rates_result: [],
    from_code_selected: null,
    to_code_selected: null,
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
    },

    setFromCodeSelected(state, payload){
      state.from_code_selected = payload
      if (state.from_code_selected != null && state.to_code_selected != null) {
        //redirect to exchange direction page
        window.location.href = '/exchange-direction/' + state.from_code_selected + '/' + state.to_code_selected + '/'
      }
    },

    setToCodeSelected(state, payload){
      state.to_code_selected = payload
      if (state.from_code_selected != null && state.to_code_selected != null) {
        //redirect to exchange direction page
        window.location.href = '/exchange-direction/' + state.from_code_selected + '/' + state.to_code_selected + '/'
      }
    },

    setRatesResult(state, payload){
      state.rates_result = payload
    }



  },
  actions: {
    fetchCurrenciesLists(context){

      axios.get('http://127.0.0.1:8000/digimon/api/currencies/')
        .then(response => context.commit("setCurrenciesLists", response.data))

    },
    setFromCode(context, code){
      context.commit("setFromCodeSelected", code)
      console.log("From selected works")

    },
    setToCode(context, code){
      context.commit("setToCodeSelected", code)
      console.log("To selected works")

    },
    fetchRates(context, payload){
      axios.get(`http://127.0.0.1:8000/digimon/api/exchanges/${payload.from_code}/${payload.to_code}/`)
        .then(response => context.commit("setRatesResult", response.data))

    },
  },
  getters:{
    getCurrenciesFromLists(state){
      return state.currencies_from_data
    },
    getCurrenciesToLists(state){
      return state.currencies_to_data
    },
    getRatesResult(state){
      return state.rates_result
    }

  }
})

export default store;
