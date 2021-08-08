import React, { useEffect, useState } from 'react';
import { queryLeaderboard } from '../../../api/riotApi';
import PlayerTab from './PlayerTab';

const Leaderboard = () => {
	const [data, setData] = useState<Object[] | null>(null);
	useEffect(() => {
		const getData = async () => {
			const res = await queryLeaderboard();
			setData(res);
		};
		getData();
	}, []);
	return (
		<div>
			<div className="text-2xl font-semibold mb-3">
				Players Leaderboard <span className="text-xl opacity-40 ml-2">EUW</span>
			</div>
			<div className="flex flex-col space-y-2">
				{!data && <div className="text-center text-2xl text-gray-500">Loading...</div>}
				{data && <PlayerTab rank={0} name="Firrj ( Firas Jaber )" lp={4069} wins={420} losses={0} />}
				{data?.map((summ: any, i) => (
					<PlayerTab
						key={summ.summonerId}
						rank={i + 1}
						name={summ.summonerName}
						lp={summ.leaguePoints}
						wins={summ.wins}
						losses={summ.losses}
					/>
				))}
			</div>
		</div>
	);
};

export default Leaderboard;
