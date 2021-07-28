import React from 'react';
import logo from './../../../utils/riot/emblems/Emblem_Challenger.png';

const RankedStats: React.FC = () => {
	return (
		<div className="flex p-3 bg-gray-100 w-64 h-full md:mt-2 rounded-md shadow border">
			<img src={logo} alt="challenger logo" className="w-24 h-28" />
			<div className="ml-4">
				<div className="text-xs opacity-30">Ranked Solo/Duo</div>
				<div className="font-semibold text-xl">Challenger</div>
				<div className="text-sm opacity-50">29 games played</div>
				<div className="font-semibold">
					55 LP <span className="text-xs">( 20W / 9L )</span>
				</div>
				<div className="text-sm opacity-50">Winrate : 60%</div>
			</div>
		</div>
	);
};

export default RankedStats;
