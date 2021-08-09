import React from 'react';
import logo from './../../../utils/riot/emblems/Emblem_Challenger.png';

interface RankedStatsProps {
	league: League | undefined;
}

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

const RankedStats: React.FC<RankedStatsProps> = ({ league }) => {
	return (
		<div className="flex p-3 bg-gray-100 w-72 lg:max-w-xs lg:w-full h-full md:mt-2 rounded-md shadow border">
			<img src={logo} alt="challenger logo" className="w-24 h-28" />
			<div className="ml-4">
				<div className="text-xs opacity-30">Ranked Solo/Duo</div>
				<div className="font-semibold text-xl">Challenger</div>
				<div className="text-sm opacity-50">29 games played</div>
				<div className="font-semibold">
					55 LP{' '}
					<span className="text-xs">
						( {league?.wins}W / {league?.losses}L )
					</span>
				</div>
				<div className="text-sm opacity-50">Winrate : 60%</div>
			</div>
		</div>
	);
};

export default RankedStats;
