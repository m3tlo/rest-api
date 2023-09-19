import firebase from "firebase/app"
/* eslint-disable no-unused-vars */ 
export default {
    actions:{
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)

            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async register({dispatch},{email, password, name}) {
            try {
                const uid = await dispatch('getUid');
                await firebase.auth().createUserWithEmailAndPassword(email, password);

                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name,
                });
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut()
            commit('clearInfo')
        }
/* eslint-disable no-unused-vars */

    }
}