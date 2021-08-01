import React from 'react';
import PlayerTab from './PlayerTab';

const Leaderboard = () => {
	return (
		<div>
			<div className="text-2xl font-semibold mb-3">
				Players Leaderboard <span className="text-xl opacity-40 ml-2">EUW</span>
			</div>
			<div className="flex flex-col space-y-2">
				<PlayerTab rank={1} name="FNC STAN" lp={1500} />
				<PlayerTab rank={2} name="firrj" lp={1305} />
				<PlayerTab rank={3} name="firrlXLZlmaoKurwa" lp={700} />
				<PlayerTab rank={4} name="firrlXLZlmaoKurwa" lp={700} />
				<PlayerTab rank={5} name="firrlXLZlmaoKurwa" lp={700} />
				<PlayerTab rank={6} name="firrlXLZlmaoKurwa" lp={700} />
				<PlayerTab rank={7} name="firrlXLZlmaoKurwa" lp={700} />
			</div>
		</div>
	);
};

export default Leaderboard;
