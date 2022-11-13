import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
  state: {
    currencies_from_data: [],
    currencies_to_data : [],
    active_from_id: 0,
    active_to_id:0,
    rates_result: [],
    top_exchangers: [],
    from_code_selected: null,
    to_code_selected: null,
  },
  mutations: {
    setCurrenciesLists(state, payloads){
      var temp = payloads[0]
      payloads[0] = payloads[1]
      payloads[1] = temp
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
      console.log('setFromCodeSelected', payload)
      if (state.from_code_selected != null && state.to_code_selected != null) {
        //redirect to exchange direction page
        window.location.href = '/exchange-direction/' + state.from_code_selected + '/' + state.to_code_selected + '/'
      }
    },

    setToCodeSelected(state, payload){
      state.to_code_selected = payload
      console.log('setToCodeSelected', payload)
      if (state.from_code_selected != null && state.to_code_selected != null) {
        //redirect to exchange direction page
        window.location.href = '/exchange-direction/' + state.from_code_selected + '/' + state.to_code_selected + '/'
      }
    },

    setRatesResult(state, payload){
      state.rates_result = payload
    },
    setTopExchangers(state, payload){
      state.top_exchangers = payload
    },
    searchingFrom(state, payload){
      for (var i = 0; i < state.currencies_from_data.length; i++) {

        for (var j = 0; j < state.currencies_from_data[i].tag_currencies.length; j++) {
          if (!state.currencies_from_data[i].tag_currencies[j].name.toLowerCase().includes(payload.toLowerCase())) {
            state.currencies_from_data[i].tag_currencies[j].active = false
          }
          else{
            state.currencies_from_data[i].tag_currencies[j].active = true
          }
        }
      }

      for (var i = 0; i < state.currencies_from_data.length; i++) {
        var flag = 0
        for (var j = 0; j < state.currencies_from_data[i].tag_currencies.length; j++) {
          if (state.currencies_from_data[i].tag_currencies[j].active==true) {
            flag = 1
          }
        }
        if (flag == 1) {
          state.currencies_from_data[i].active = true
        }
        else{
          state.currencies_from_data[i].active = false
        }
      }

    },

    searchingTo(state, payload){
      for (var i = 0; i < state.currencies_to_data.length; i++) {

        for (var j = 0; j < state.currencies_to_data[i].tag_currencies.length; j++) {
          if (!state.currencies_to_data[i].tag_currencies[j].name.toLowerCase().includes(payload.toLowerCase())) {
            state.currencies_to_data[i].tag_currencies[j].active = false
          }
          else{
            state.currencies_to_data[i].tag_currencies[j].active = true
          }
        }
      }

      for (var i = 0; i < state.currencies_to_data.length; i++) {
        var flag = 0
        for (var j = 0; j < state.currencies_to_data[i].tag_currencies.length; j++) {
          if (state.currencies_to_data[i].tag_currencies[j].active==true) {
            flag = 1
          }
        }
        if (flag == 1) {
          state.currencies_to_data[i].active = true
        }
        else{
          state.currencies_to_data[i].active = false
        }
      }

    }



  },
  actions: {
    fetchCurrenciesLists(context){

      axios.get('http://127.0.0.1:8000/digimon/api/cryptotags/')
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
    fetchTopExchangers(context){
      axios.get('http://127.0.0.1:8000/digimon/api/exchanges/')
        .then(response => context.commit("setTopExchangers", response.data))
    },
    searchFrom(state, payload){
      console.log('searchFrom', payload)
      state.commit('searchingFrom', payload)
    },
    searchTo(state, payload){
      console.log('searchTo', payload)
      state.commit('searchingTo', payload)
    }

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
    },
    getTopExchangers(state){
      return state.top_exchangers
    }

  }
})

export default store;
