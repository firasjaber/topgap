import ChampionsMastery from './ChampionsMastery';
import Match from './Match';
import RankedStats from './RankedStats';
import RecentStats from './RecentStats';

const Profile = () => {
	return (
		<div className="flex-col items-center md:flex mb-60">
			<div className="flex-initial max-w-xs mx-auto sm:mx-0">
				<RankedStats />
				<ChampionsMastery />
			</div>
			<div className="flex-initial w-full max-w-xl mx-auto  space-y-2">
				<RecentStats />
				<Match won={true} />
				<Match won={false} />
				<Match won={true} />
				<Match won={false} />
			</div>
		</div>
	);
};

export default Profile;
