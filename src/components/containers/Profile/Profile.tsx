import { useState } from 'react';
import ChampionsMastery from './ChampionsMastery';
import Match from './Match';
import RankedStats from './RankedStats';
import RecentStats from './RecentStats';

type League = {
	leagueId: string;
	queueType: string;
	tier: string;
	rank: string;
	summonerId: string;
	summonerName: string;
	leaguePoints: number;
	wins: number;
	losses: number;
	veteran: boolean;
	inactive: boolean;
	freshBlood: boolean;
	hotStreak: boolean;
};

const Profile = () => {
	const [rankedStats, setRankedStats] = useState<League | undefined>(undefined);
	const [championsMastery, setChampionsMastery] = useState<Object[] | undefined>(undefined);
	return (
		<div className="flex flex-col items-center md:flex mb-60 lg:flex-row lg:items-start">
			<div className="flex-initial w-full mx-auto max-w-xl">
				<div className="flex flex-col items-center md:flex-row md:space-x-2 lg:flex-col lg:space-x-0 lg:max-w-xs lg:mr-0 ">
					<RankedStats league={rankedStats} />
					<ChampionsMastery champions={championsMastery} />
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
