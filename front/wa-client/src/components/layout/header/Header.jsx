import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { isAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink || '/')
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					{' '}
					<SlUser fill='#fff' fontSize={29} />{' '}
				</button>
			)}
			<Hamburger />
		</header>
	)
}
export default Header
