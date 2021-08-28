import React from 'react';

const ProfileInfos = () => {
	//TODO : make this dynmaic
	const summonerIcon =
		'https://1.bp.blogspot.com/-JnfcKLxSQyw/XcnJRQBEupI/AAAAAAABbMM/-EoImnkSIQUza-fsEcAcDeU1s0CryIRGgCLcBGAsYHQ/s1600/4403.jpg';

	return (
		<div className="flex space-x-4 items-center mb-7">
			<img className="w-20 h-20 rounded-3xl border-3 border-blue-950" src={summonerIcon} alt="summoner icon" />
			<div className="font-inter -mt-2">
				<div className="text-white font-semibold text-2xl">FNC Stan</div>
				<div className="text-white opacity-60 -mt-2">Summoner Level : 420</div>
			</div>
		</div>
	);
};

export default ProfileInfos;
