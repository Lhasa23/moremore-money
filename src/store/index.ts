import Vue from 'vue';
import Vuex from 'vuex';
import {Record} from '@/interfaces/record';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		recordList: [] as Record[]
	},
	mutations: {
		fetchRecordList(state) {
			state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
		},
		createRecord(state, record) {
			const target = JSON.parse(JSON.stringify(record));
			target.createAt = new Date();
			state.recordList.push(target);
			store.commit('saveRecordList')
		},
		saveRecordList(state) {
			window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
		},
	},
	actions: {},
	modules: {}
});

export default store
