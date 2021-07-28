import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MatchStats = () => {
	const percentage = 55;
	const championAvatar = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/Yasuo.png';

	return (
		<div className="rounded overflow-hidden shadow bg-gray-100 mb-5 p-3 px-8">
			<div className="flex items-center justify-between">
				{/* Win Ratio & KDA Stats */}
				<div className="flex flex-col">
					<div className="text-gray-300 text-xs mb-2 text-center">Recent Matches Stats ( 20 games )</div>
					<div className="flex items-center">
						<div className="w-20 h-20">
							<CircularProgressbar value={percentage} text={`${percentage}%`} />
						</div>
						<div className="ml-5 flex flex-col items-center">
							<div className="text-2xl font-semibold text-green-600">2.10 KDA</div>
							<div className="flex text-sm space-x-2">
								<div className="text-green-600">120/K</div>
								<div className="text-red-500">60/D</div>
								<div className="text-blue-500">200/A</div>
							</div>
						</div>
					</div>
				</div>
				{/* Most Played Champions */}
				<div className="hidden flex-col space-y-1 xs:flex">
					<div className="text-gray-300 text-xs">Most Played Champions</div>
					{[0, 1, 2].map((el) => (
						<div className="flex items-center" key={el}>
							<img className="rounded-full h-6 w-6 flex items-center justify-center" src={championAvatar} alt="yasuo" />
							<div className="text-gray-800 text-md ml-2">
								Lissandra <span className="text-xs text-gray-500">10</span>
							</div>
						</div>
					))}
				</div>
				{/* Played Roles */}
				<div className="hidden flex-col space-y-1 sm:flex">
					<div className="text-gray-300 text-xs">Roles</div>

					<div className="flex items-center">
						<img className="rounded-full h-6 w-6 flex items-center justify-center" src={championAvatar} alt="yasuo" />
						<div className="text-gray-800 text-md ml-2">
							Top <span className="text-xs text-gray-500">10</span>
						</div>
					</div>
					<div className="flex items-center">
						<img className="rounded-full h-6 w-6 flex items-center justify-center" src={championAvatar} alt="yasuo" />
						<div className="text-gray-800 text-md ml-2">
							Jungle <span className="text-xs text-gray-500">7</span>
						</div>
					</div>
					<div className="flex items-center">
						<img className="rounded-full h-6 w-6 flex items-center justify-center" src={championAvatar} alt="yasuo" />
						<div className="text-gray-800 text-md ml-2">
							Bot <span className="text-xs text-gray-500">3</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MatchStats;
