import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';

const Match = () => {
	const championAvatar = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/Yasuo.png';
	const teleportUrl = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/SummonerTeleport.png';
	const flashUrl = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/SummonerFlash.png';
	const itemUrl = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/1001.png';
	return (
		<div className="relative rounded overflow-hidden">
			<div className="bg-gray-400 w-full h-6 text-white text-xs p-1 pl-2">
				Ranked Solo/Duo - 40 min - Victory - 1 day ago
			</div>
			<div className="flex items-center space-x-3">
				{/* NOTE : I did double flex containers because the negative margin
									 of the summonars spells wont work directly so i had to group them
									 because they dont have the same spacing as others childs of the container 
				*/}
				<div className="flex items-center p-3 ml-1">
					<img className="rounded-full h-14 w-14 flex items-center justify-center" src={championAvatar} alt="yasuo" />
					<div className="flex-col ml-2 space-y-1">
						<img className="h-6 w-6 flex items-center justify-center rounded" src={teleportUrl} alt="teleport" />
						<img className="h-6 w-6 flex items-center justify-center rounded" src={flashUrl} alt="flash" />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="font-semibold text-lg">13/9/21</div>
					<div className="text-sm -mt-1">150 cs</div>
				</div>
				<div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-1">
					<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
					<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
					<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
					<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
					<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
					<img className="w-6 h-6 flex items-center justify-center rounded" src={itemUrl} alt="item" />
				</div>
				<div className="absolute bottom-0 right-0 flex items-center justify-center h-full w-6 bg-gray-400">
					<ChevronDoubleDownIcon className="h-4 w-4 mt-6 text-gray-100" />
				</div>
			</div>
		</div>
	);
};

export default Match;
