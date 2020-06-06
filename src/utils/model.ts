import {Record} from '@/interfaces/record';

const recordName = 'recordList';
const labelName = 'MoneyLabels';
export const model = {
	fetchRecordList() {
		return JSON.parse(window.localStorage.getItem(recordName) || '[]');
	},
	saveRecordList(data: Array<Record>) {
		window.localStorage.setItem(recordName, JSON.stringify(data));
	},
	fetchLabelList() {
		return JSON.parse(localStorage.getItem(labelName) || '[]')
	}
};
