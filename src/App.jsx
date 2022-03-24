import './App.css'
import Counter from './components/Counter'


const App = () => (
	<div>
		<h1> My counter app </h1>
		<Counter />
		<Counter />
		<Counter />
		<Counter />
	</div>
)


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

