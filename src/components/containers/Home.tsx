import React from 'react';
import SearchInput from '../shared/SearchInput';

const Home = () => {
	return (
		<div className="flex flex-col items-center mt-36">
			<SearchInput />
			<p className="mt-4 font-exo text-gray-200 text-2xl font-light max-w-sm text-center opacity-85">
				Lookup for your <span className="text-blue-950 font-normal opacity-100">Summoner</span> profile and get
				statistics and analitycs of your recent games.
			</p>
		</div>
	);
};

export default Home;
