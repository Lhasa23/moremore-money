import {Record} from '@/interfaces/record';

const recordName = 'recordList';
const labelName = 'MoneyLabels';
export const model = {
	fetchRecordList(): Record[] {
		return JSON.parse(window.localStorage.getItem(recordName) || '[]');
	},
	saveRecordList(data: Array<Record>) {
		window.localStorage.setItem(recordName, JSON.stringify(data));
	},
	fetchLabelList(): string[] {
		return JSON.parse(localStorage.getItem(labelName) || '[]');
	}
};
