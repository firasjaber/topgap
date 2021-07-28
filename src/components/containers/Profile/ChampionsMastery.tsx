import React from 'react';

const ChampionsMastery = () => {
	return (
		<div className="flex-col flex-1 bg-gray-100  rounded-md shadow border my-2 overflow-hidden w-full max-w-24">
			<div className="bg-gray-700 text-white p-3 font-semibold text-lg pl-4">Champions Masteries</div>
			<div className="space-y-2 my-2">
				<ChampionMastery />
				<ChampionMastery />
				<ChampionMastery />
				<ChampionMastery />
				<ChampionMastery />
			</div>
		</div>
	);
};

const ChampionMastery = () => {
	const championAvatar = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/Aatrox.png';

	return (
		<div className="flex items-center p-1 ml-3 mx-2">
			<img className="rounded-full h-12 w-12 flex items-center justify-center" src={championAvatar} alt="aatrox" />
			<div className="ml-3">
				<div className="text-lg">Aatrox</div>
				<div className="text-xs opacity-30 -mt-1">Level 7</div>
				<div className="text-sm opacity-70 -mt-1">450k Mastery Points</div>
			</div>
		</div>
	);
};

export default ChampionsMastery;
