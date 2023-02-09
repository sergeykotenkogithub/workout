import styles from '../ExerciseLog.module.scss'

const TableHeader = () => {
	const tableNames = ['Previous', 'Weight & Repeat', 'Completed']

	return (
		<div className={styles.row}>
			{tableNames.map(tableName => (
				<div key={tableName}>
					<span>{tableName}</span>
				</div>
			))}
		</div>
	)
}

export default TableHeader
