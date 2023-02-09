import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside()

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} aria-label='Open menu'>
				{isShow ? <IoClose color='white' /> : <CgMenuRight color='white' />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
