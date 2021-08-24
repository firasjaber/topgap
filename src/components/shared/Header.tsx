import { Link, useLocation } from 'react-router-dom';
import SearchInput from '../shared/SearchInput';

const Header: React.FC = () => {
	const { pathname } = useLocation();
	return (
		<nav className="pt-5 flex flex-col space-y-2 items-center justify-between sm:flex-row sm:space-y-0">
			<div className="flex  flex-col space-y-3 mb-1  items-center sm:space-x-8 sm:flex-row sm:space-y-0 sm:mb-0">
				<Link to="/">
					<div className="font-exo font-bold text-3xl">
						<span className="text-blue-950">TOP</span>
						<span className="text-white">GAP</span>
					</div>
				</Link>
				{pathname !== '/' && <SearchInput size="sm" />}
			</div>

			<div className="flex font-inter text-md text-gray-400 space-x-5">
				<div>
					<Link className="text-gray-200" to="/profile">
						Profile
					</Link>
				</div>
				<div>
					<Link className="hover:text-gray-300 hover:pointer" to="/live">
						Live
					</Link>
				</div>
				<div>
					<Link className="hover:text-gray-300 hover:pointer" to="/leaderboard">
						Leaderboard
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
