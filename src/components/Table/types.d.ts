export interface TableAction<T> {
	icon: React.ComponentType<{ size?: number }>
	onClick: (item: T) => void
	label: string
}

export interface TableProps<T> {
	data: T[]
	columns: ColumnDef<T>[]
	actions?: TableAction<T>[]
}
