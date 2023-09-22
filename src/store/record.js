import firebase from 'firebase/app';
/* eslint-disable no-unused-vars */

export default {
  actions: {
    async createRecord({ dispatch, commit }, record) {
      try {
        // const uid = await dispatch('getUid');
        // await firebase.database().ref(`/users/${uid}/records`).push(record);
        this.getters.info.records.push(record)
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
    async fetchRecords({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');
        const records =
          (
            await firebase.database().ref(`/users/${uid}/records`).once('value')
          ).val() || {};
        return Object.keys(records).map((key) => ({
          ...records[key],
          id: key,
        }));
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    },
  },
};
