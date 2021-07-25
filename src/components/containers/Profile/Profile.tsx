import ChampionsMastery from './ChampionsMastery';
import RankedStats from './RankedStats';

const Profile = () => {
	return (
		<div className="flex-col items-center md:flex ">
			<div className="flex-initial max-w-xs mx-auto sm:mx-0">
				<RankedStats />
				<ChampionsMastery />
			</div>
			<div className="flex-initial bg-gray-100">
				<div className="w-full">
					<h2>stats</h2>
				</div>
			</div>
		</div>
	);
};

export default Profile;
