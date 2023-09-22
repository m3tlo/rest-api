import firebase from 'firebase/app';
/* eslint-disable no-unused-vars */

export default {
  state: {
    info: {
      name: 'Даниил',
      bill: 65000,
      records : 
      [
        
    ],
    categories: [ 
      {
        id: 1,
        title: 'Машина',
        limit: 10000,
      },
      {
        id: 2,
        title: 'Дом',
        limit: 10000,
      },
      {
        id: 3,
        title: 'Жена',
        limit: 10000,
      },
    ],
    
    },
    
  
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async updateInfo({ dispatch, commit, getters }, toUpdate) {
      try {
        const uid = await dispatch('getUid');
        const updateData = { ...getters.info, ...toUpdate };
        // await firebase.
        // database().
        // ref(`/users/${uid}/info`).
        // update(toUpdate);
        this.getters.info.bill = toUpdate
        commit('setInfo', updateData);
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');
        const info = (
          await firebase.database().ref(`/users/${uid}/info`).once('value')
        ).val();
        commit('setInfo', info);
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
  },
  getters: {
    info: (state) => state.info,
  },
};
