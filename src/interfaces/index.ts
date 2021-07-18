export interface IProfileData {
	accountId: string;
	id: string;
	name: string;
	profileIconId: number;
	puuid: string;
	revisionDate: number;
	summonerLevel: number;
}

export interface ISummonerRankedData {
	freshBlood: boolean;
	hotStreak: boolean;
	inactive: boolean;
	leagueId: string;
	leaguePoints: number;
	losses: number;
	wins: number;
	tier: string;
	rank: string;
	summonerName: string;
	veteran: false;
	summonerId: string;
	queueType: string;
}
