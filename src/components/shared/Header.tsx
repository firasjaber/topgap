import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					<Link to="/leaderboard">Leaderboard</Link>
				</li>
				<li>
					<Link to="/livegame">Livegame</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
