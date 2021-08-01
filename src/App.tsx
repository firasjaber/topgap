import './App.css';
import { Container } from './components/layouts';
import { Livegame, Profile, Leaderboard, Home } from './components/containers';
import Header from './components/shared/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Container>
					<h2>TOP DIFF (maybe bot too)</h2>
					<Header />
					<Switch>
						<Route path="/profile" exact component={Profile} />
						<Route path="/leaderboard" exact component={Leaderboard} />
						<Route path="/livegame" exact component={Livegame} />
						<Route path="/" component={Home} />
					</Switch>
				</Container>
			</Router>
		</div>
	);
}

export default App;
