import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'


const App = () => {
	const [count, setCount] = useState(12)

	// function increase(event) {
	// 	setCount(count + 1)
	// }
	const increase = event => setCount(count + 1)

	return (
		<div>
			<h1> My counter app </h1>
			<section>
				<button onClick={increase}> Increase +1 </button>
				<p>The value is: {count}.</p>
			</section>
		</div>
	)
};


export default App


// function App() {
	// 	const [count, setCount] = useState(10)

// 	return (
// 		<div className="App">
// 			<header>
// 				<h1> React demo </h1>
// 			</header>
// 			<main className="App-header">
// 				<button onClick={() => setCount(count + 1)}>
// 				count is: {count}
// 				</button>
// 				<button onClick={() => setCount(count - 1)}> Decrease value </button>
// 			</main>
// 		</div>
// 	)
// }

