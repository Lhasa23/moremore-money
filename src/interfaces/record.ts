export interface Record {
	type: string
	labels?: string[]
	amount: number
	remark: string
	createAt?: string
}

export interface RootState {
	recordList: Record[]
}
