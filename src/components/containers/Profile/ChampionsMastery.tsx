import React from 'react';
import { nFormatter } from '../../../utils/formatters';

interface ChampionsMasteryProps {
	champions: Object[] | undefined;
}

const ChampionsMastery: React.FC<ChampionsMasteryProps> = ({ champions }) => {
	return (
		<div className="flex-col flex-1 bg-gray-100  rounded-md shadow border my-2 overflow-hidden w-full max-w-24">
			<div className="bg-gray-700 text-white p-3 font-semibold text-lg pl-4">Champions Masteries</div>
			<div className="space-y-2 my-2">
				{champions && champions.map((champ: any) => <ChampionMastery key={champ.championId} {...champ} />)}
			</div>
		</div>
	);
};

interface ChampionMasteryProps {
	championId: number;
	champion: string;
	championAvatar: string;
	championLevel: number;
	championPoints: number;
}

const ChampionMastery: React.FC<ChampionMasteryProps> = (props) => {
	return (
		<div className="flex items-center p-1 ml-3 mx-2">
			<img
				className="rounded-full h-12 w-12 flex items-center justify-center"
				src={props.championAvatar}
				alt={props.champion}
			/>
			<div className="ml-3 ">
				<div className="text-lg">{props.champion}</div>
				<div className="text-xs opacity-40 -mt-1">Level {props.championLevel}</div>
				<div className="text-sm opacity-70 -mt-1">{nFormatter(props.championPoints, 1)} Mastery Points</div>
			</div>
		</div>
	);
};

export default ChampionsMastery;
