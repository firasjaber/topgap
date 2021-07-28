import ChampionsMastery from './ChampionsMastery';
import Match from './Match';
import RankedStats from './RankedStats';
import RecentStats from './RecentStats';

const Profile = () => {
	return (
		<div className="flex flex-col items-center md:flex mb-60">
			<div className="flex-initial w-full mx-auto max-w-xl">
				<div className="flex flex-col items-center md:flex-row md:space-x-2 ">
					<RankedStats />
					<ChampionsMastery />
				</div>
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
