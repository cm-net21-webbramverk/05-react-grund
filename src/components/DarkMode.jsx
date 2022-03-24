import { useState } from 'react'
import './DarkMode.css'

const DarkMode = () => {
	const LIGHT_THEME = 'light', DARK_THEME = 'dark'
	const [theme, setTheme] = useState(LIGHT_THEME)
	
	const toggle = () => {
		// Lättläst
		if( theme === LIGHT_THEME ) {
			setTheme(DARK_THEME)
		} else {
			setTheme(LIGHT_THEME)
		}
		// Cool
		// setTheme( theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME )
	}

	return (
		<div className={"theme-container " + theme}>
			<p>Toggle light/dark mode</p>
			<button onClick={toggle}> Toggle </button>
		</div>
	)
}

export default DarkMode
// export { f1, f2, f3 }  - om man vill exportera flera saker
