import {Record} from '@/interfaces/record';

const recordName = 'recordList';
const labelName = 'MoneyLabels';

type labelsModel = {
	data: string[]
	fetch: () => string[]
	create: (name: string) => string
	save: () => void
}

export const model = {
	fetchRecordList(): Record[] {
		return JSON.parse(window.localStorage.getItem(recordName) || '[]');
	},
	saveRecordList(data: Array<Record>) {
		window.localStorage.setItem(recordName, JSON.stringify(data));
	}
};

export const labelModel: labelsModel = {
	data: [],
	fetch(): string[] {
		this.data = JSON.parse(localStorage.getItem(labelName) || '[]');
		return this.data;
	},
	create(name: string) {
		this.data.push(name);
		this.save();
		return name;
	},
	save() {
		localStorage.setItem(labelName, JSON.stringify(this.data));
	}
};