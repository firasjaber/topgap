import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IProfileData, ISummonerRankedData } from '../interfaces';
import { RIOT_API_KEY } from './../config';

const BASE_URL = 'https://fathomless-badlands-46265.herokuapp.com/https://euw1.api.riotgames.com';

const config: AxiosRequestConfig = {
	headers: {
		'X-Riot-Token': RIOT_API_KEY,
		//	Origin: 'http://localhost:300',
	},
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
		return res.data.slice(0, 5);
	} catch (error) {
		console.log(error);
	}
};

export const queryMatchHistory = async (encryptedAccountId: string) => {
	try {
		const URL = `${BASE_URL}/lol/match/v4/matchlists/by-account/${encryptedAccountId}?endIndex=5&beginIndex=0`;
		const res = await axios.get<any>(URL, config);
		let matches = res.data?.matches;
		for (let i = 0; i < 5; i++) {
			console.log(matches[0]);
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
