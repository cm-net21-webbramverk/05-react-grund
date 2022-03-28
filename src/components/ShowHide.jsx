import { useState } from 'react'
import Counter from './Counter'
import './DarkMode.css'

const ShowHide = () => {
	const [isVisible, setIsVisible] = useState(true)
	const [isVisible2, setIsVisible2] = useState(true)
	const toggle = () => { setIsVisible(!isVisible) }
	const toggle2 = () => { setIsVisible2(!isVisible2) }

	return (
		<section className="theme-container">
			<button onClick={toggle}> Toggle existence </button>
			{isVisible ? <Counter initial={1} /> : null}

			<button onClick={toggle2}> Toggle visibility </button>
			<div className={isVisible2 ? '' : "hidden"}>
				<Counter initial={8} />
			</div>
		</section>
	)
}

export default ShowHide
