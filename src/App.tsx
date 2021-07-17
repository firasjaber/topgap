import './App.css';
import { Container } from './components/layouts';
import { Profile } from './components/containers';

function App() {
	return (
		<div className="App">
			<Container>
				<h2>Hello World</h2>
				<Profile />
			</Container>
		</div>
	);
}

export default App;
