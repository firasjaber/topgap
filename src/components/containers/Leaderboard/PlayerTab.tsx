import React from 'react';
import { getWinRate } from '../../../utils/formatters';
import logo from './../../../utils/riot/emblems/Emblem_Challenger.png';

interface IPlayerTab {
	rank: number;
	name: string;
	lp: number;
	wins: number;
	losses: number;
}

const PlayerTab: React.FC<IPlayerTab> = ({ rank, name, lp, wins, losses }) => {
	const summonerIcon = 'https://i.pinimg.com/236x/40/a1/ac/40a1ac9579adba4b592a15bcea8f0e18.jpg';
	return (
		<div className="flex justify-between w-full bg-gray-100 rounded p-1.5 px-3">
			<div className="flex items-center space-x-3 overflow-hidden">
				<span className="text-gray-400 text-sm mr-2">{rank}</span>
				<img className="rounded-full h-9 w-9 flex items-center justify-center" src={summonerIcon} alt="summoner icon" />
				<div className="font-semibold text-lg text-gray-700 whitespace-nowrap">{name}</div>
			</div>
			<div className="flex items-center space-x-2">
				<img className="rounded-full h-7 w-7 flex items-center justify-center" src={logo} alt="challanger" />
				<div className="text-gray-700 font-semibold whitespace-nowrap">{lp} LP</div>
				<div className="hidden items-center sm:flex space-x-2">
					<div className="text-gray-500 text-sm">{getWinRate(wins, losses)}%</div>
					<div className="text-gray-500 text-sm">
						( {wins}W-{losses}L )
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerTab;
