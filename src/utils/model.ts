const labelName = 'MoneyLabels';

type labelsModel = {
	data: string[]
	fetch: () => string[]
	create: (name: string) => string
	save: () => void
	edit: (name: string, index: number) => void
	delete: (index: number) => void
}

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
	},
	edit(name: string, index: number) {
		this.data.splice(index, 1, name);
		this.save();
	},
	delete(index: number) {
		this.data.splice(index, 1);
		this.save();
	}
};
