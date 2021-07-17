import './App.css';
import Container from './components/layout/Container';
import Profile from './components/containers/Profile';

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
