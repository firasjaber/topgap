import React from 'react';
import { formatRank, getWinRate } from '../../../utils/formatters';
//Ranks Emblems
import bronzeEmblem from './../../../utils/riot/emblems/Emblem_Bronze.png';
import challengerEmblem from './../../../utils/riot/emblems/Emblem_Challenger.png';
import diamonEmblem from './../../../utils/riot/emblems/Emblem_Diamond.png';
import goldEmblem from './../../../utils/riot/emblems/Emblem_Gold.png';
import grandmasterEmblem from './../../../utils/riot/emblems/Emblem_Grandmaster.png';
import ironEmblem from './../../../utils/riot/emblems/Emblem_Iron.png';
import masterEmblem from './../../../utils/riot/emblems/Emblem_Master.png';
import platinumEmblem from './../../../utils/riot/emblems/Emblem_Platinum.png';
import silverEmblem from './../../../utils/riot/emblems/Emblem_Silver.png';
import unrankedEmblem from './../../../utils/riot/emblems/Emblem_Unranked.png';

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
			<img src={league ? getRankImage(league?.tier) : unrankedEmblem} alt="challenger logo" className="w-24 h-28" />
			<div className="ml-4">
				<div className="text-xs opacity-30">Ranked Solo/Duo</div>
				<div className="font-semibold text-xl">{league ? formatRank(league?.tier, league?.rank) : 'Unranked'}</div>
				{league && (
					<>
						<div className="text-sm opacity-50">{league && league?.wins + league?.losses} games played</div>
						<div className="font-semibold whitespace-nowrap overflow-hidden">
							{league?.leaguePoints} LP{' '}
							<span className="text-xs ">
								( {league?.wins}W / {league?.losses}L )
							</span>
						</div>
						<div className="text-sm opacity-50">Winrate : {league && getWinRate(league?.wins, league?.losses)}%</div>
					</>
				)}{' '}
			</div>
		</div>
	);
};

//get image rank based on rank
function getRankImage(tier: string | undefined) {
	switch (tier) {
		case 'IRON':
			return ironEmblem;
		case 'BRONZE':
			return bronzeEmblem;
		case 'SILVER':
			return silverEmblem;
		case 'GOLD':
			return goldEmblem;
		case 'PLATINUM':
			return platinumEmblem;
		case 'DIAMOND':
			return diamonEmblem;
		case 'MASTER':
			return masterEmblem;
		case 'GRANDMASTER':
			return grandmasterEmblem;
		case 'CHALLENGER':
			return challengerEmblem;
		default:
			return challengerEmblem;
	}
}

export default RankedStats;
