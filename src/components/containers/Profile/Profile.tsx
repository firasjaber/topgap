import ChampionsMastery from './ChampionsMastery';
import Match from './Match';
import RankedStats from './RankedStats';
import RecentStats from './RecentStats';

const Profile = () => {
	return (
		<div className="flex flex-col items-center md:flex mb-60 lg:flex-row lg:items-start">
			<div className="flex-initial w-auto mx-auto max-w-xl lg:max-64">
				<div className="flex flex-col items-center md:flex-row md:space-x-2 lg:flex-col lg:space-x-0 lg:max-w-xs lg:mr-0 ">
					<RankedStats />
					<ChampionsMastery champions={undefined} />
				</div>
			</div>
			<div className="flex-1 w-full max-w-xl mx-auto space-y-2 lg:mt-2.5">
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
