import './App.css';
import { Container } from './components/layouts';
import { Livegame, Profile, Leaderboard, Home, Dummy } from './components/containers';
import Header from './components/shared/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeonaBg from './utils/leo-bg.webp';

function App() {
	return (
		<div className="relative bg-blue-1000 h-screen" >
			<div className="bg-image"></div>
			<Router>
				<Container>
					<h2>TOP DIFF (maybe bot too)</h2>
					<Header />
					<Switch>
						<Route path="/profile" exact component={Profile} />
						<Route path="/leaderboard" exact component={Leaderboard} />
						<Route path="/livegame" exact component={Livegame} />
						<Route path="/dummy" exact component={Dummy} />
						<Route path="/" component={Home} />
					</Switch>
				</Container>
			</Router>
		</div>
	);
}

export default App;
