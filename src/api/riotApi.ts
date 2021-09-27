import axios, { AxiosRequestConfig } from 'axios';
import { IProfileData, ISummonerRankedData } from '../interfaces';
import { RIOT_API_KEY } from './../config';

const BASE_URL = 'https://fathomless-badlands-46265.herokuapp.com/https://euw1.api.riotgames.com';

const config: AxiosRequestConfig = {
	headers: {
		'X-Riot-Token': RIOT_API_KEY,
	},
};
//NTOE : REFACTOR LATER
async function getChampionAvatar(championKey: any) {
	const URL = 'https://ddragon.leagueoflegends.com/api/versions.json';
	const res = await axios.get(URL);
	const version = res.data[0];
	const NEW_URL = 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/Aatrox.png';
	const CHAMPS_URL = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US/champion.json';
	const res2 = await axios.get(CHAMPS_URL);
	const allChamps = res2.data.data;
	let myChamp = null;
	for (const champ in allChamps) {
		if (allChamps[champ].key === championKey.toString()) {
			myChamp = allChamps[champ].id;
		}
	}
	return [myChamp, 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/' + myChamp + '.png'];
}

export const queryLeaderboard = async () => {
	const URL = `${BASE_URL}/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`;
	const res = await axios.get(URL, config);
	return res.data.entries.sort((a: any, b: any) => (a.leaguePoints < b.leaguePoints ? 1 : -1)).slice(0, 20);
};

export const querySummoner = async (summonerName: string) => {
	try {
		const URL = `${BASE_URL}/lol/summoner/v4/summoners/by-name/${summonerName}`;
		const res = await axios.get<IProfileData>(URL, config);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const querySummonerLeague = async (encryptedSummonerId: string) => {
	try {
		const URL = `${BASE_URL}/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`;
		const res = await axios.get<ISummonerRankedData[]>(URL, config);
		return res.data[0];
	} catch (error) {
		console.log(error);
	}
};

export const queryChampionsMystery = async (encryptedSummonerId: string) => {
	try {
		const URL = `${BASE_URL}/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}`;
		const res = await axios.get(URL, config);
		const topFive = res.data.slice(0, 5);
		const topFiveWithAvatar: any = [];
		topFive.map(async ({ championId, championPoints, championLevel }: any) => {
			const [champion, championAvatar] = await getChampionAvatar(championId);
			topFiveWithAvatar.push({ championId, champion, championAvatar, championLevel, championPoints });
		});
		return topFiveWithAvatar;
	} catch (error) {
		console.log(error);
	}
};

export const queryMatchHistory = async (encryptedAccountId: string) => {
	try {
		const URL = `${BASE_URL}/lol/match/v4/matchlists/by-account/${encryptedAccountId}?endIndex=5&beginIndex=0`;
		const res = await axios.get<any>(URL, config);
		let matches = res.data?.matches;
		for (let i = 0; i < 10; i++) {
			matches[i].details = await queryGameDetail(5372356680);
		}
		return res.data?.matches;
	} catch (error) {
		console.log(error);
	}
};

export const queryGameDetail = async (gameId: number) => {
	try {
		const URL = `${BASE_URL}/lol/match/v4/matches/${gameId}`;
		const res = await axios.get<any>(URL, config);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const buildPorfileData = async (summonerName: string) => {
	try {
	} catch (error) {
		console.log(error);
	}
};

export const buildLiveGameData = async (summonerName: string) => {
	try {
	} catch (error) {}
};

export const buildLeaderBoardData = async () => {
	try {
	} catch (error) {}
};
