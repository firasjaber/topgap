import './App.css';
import { Container } from './components/layouts';
import { Profile } from './components/containers';
import Header from './components/shared/Header';

function App() {
	return (
		<div className="App">
			<Container>
				<h2>TOP DIFF (maybe bot too)</h2>
				<Header />
				<Profile />
			</Container>
		</div>
	);
}

export default App;
