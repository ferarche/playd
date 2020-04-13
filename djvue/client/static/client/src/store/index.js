const state = {
    message : 'Welcome'
}

const mutations = {
    setMessage(state, msg){
        state.message = msg;
    }
}

const getters = {
    getMessage : state => state.message,
}

export default {
	state,
	mutations,
	getters,
}