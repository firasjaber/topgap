import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';

interface MatchProps {
	won: boolean;
}

const Match: React.FC<MatchProps> = ({ won }) => {
	const championAvatar = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/Yasuo.png';
	const teleportUrl = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/SummonerTeleport.png';
	const flashUrl = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/SummonerFlash.png';
	const itemUrl = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/1001.png';
	const lostColor = 'bg-gradient-to-r from-red-300 to-blue-400 via-red-300	';
	const wonColor = 'bg-gradient-to-r from-green-300 to-blue-400 via-green-300	';
	const color = won ? wonColor : lostColor;
	return (
		<div className={`relative rounded overflow-hidden shadow `}>
			<div className={'w-full h-6 text-gray-800 text-xs p-1 pl-2 ' + color}>
				Ranked Solo/Duo - 40 min - Victory - 1 day ago
			</div>
			<div className="flex items-center justify-between">
				{/* NOTE : I did double flex containers because the negative margin
									 of the summonars spells wont work directly so i had to group them
									 because they dont have the same spacing as others childs of the container 
				*/}
				{/* Champion Avatar & summonars part */}
				<div className="flex items-center space-x-3">
					<div className="flex items-center p-3 py-5 ml-1">
						<img className="rounded-full h-14 w-14 flex items-center justify-center" src={championAvatar} alt="yasuo" />
						<div className="flex-col ml-2 space-y-1">
							<img className="h-6 w-6 flex items-center justify-center rounded" src={teleportUrl} alt="teleport" />
							<img className="h-6 w-6 flex items-center justify-center rounded" src={flashUrl} alt="flash" />
						</div>
					</div>
					{/* KDA & CS */}
					<div className="flex flex-col items-center justify-center ">
						<div className="font-semibold text-lg">13/9/21</div>
						<div className="text-sm -mt-1">150 cs</div>
					</div>
					{/* Items */}
					<div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-1 pl-2">
						<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
						<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
						<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
						<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
						<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
						<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
					</div>
				</div>

				{/* Teams */}
				<div className="hidden xxs:grid grid-flow-col grid-cols-2 grid-rows-5 gap-y-0.5 gap-x-6 mr-12 xss:mr-15 sm:mr-10 ">
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
						<div className="flex items-center" key={el}>
							<img className="w-4 h-4 flex items-center justify-center rounded" src={championAvatar} alt="yasuo" />
							<div className="hidden text-xs font-normal ml-1  overflow-hidden whitespace-nowrap w-10 xs:inline sm:w-20">
								FNC StanxyzL
							</div>
						</div>
					))}
				</div>

				<div className="absolute bottom-0 right-0 flex items-center justify-center h-full w-6 bg-blue-400">
					<ChevronDoubleDownIcon className="h-4 w-4 mt-6 text-gray-100" />
				</div>
			</div>
		</div>
	);
};

export default Match;
