import axios from 'axios';
import { profile } from 'console';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { queryChampionsMystery, queryMatchHistory, querySummoner, querySummonerLeague } from './../../api/riotApi';
//Interfaces
import { IProfileData, ISummonerRankedData } from './../../interfaces';
import RankedStats from './Profile/RankedStats';
//Types
type Inputs = {
	summonerName: string;
};

const Profile = () => {
	const [profileData, setProfileDate] = useState<IProfileData | undefined>(undefined);
	const [rankedData, setRankedData] = useState<ISummonerRankedData | undefined>(undefined);
	const [championsMystery, setChampionsMystery] = useState<Array<Object> | undefined>(undefined);
	const [matchHistory, setMatchHistory] = useState<Array<Object> | undefined>(undefined);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async ({ summonerName }) => {
		const res = await querySummoner(summonerName);
		setProfileDate(res);
	};

	useEffect(() => {
		async function getLeague() {
			if (profileData?.id) {
				const res = await querySummonerLeague(profileData.id);
				setRankedData(res);
			}
		}
		async function getChampionsMystery() {
			if (profileData?.id) {
				const res = await queryChampionsMystery(profileData.id);
				setChampionsMystery(res);
			}
		}
		async function getMatchHistory() {
			if (profileData?.id) {
				const res = await queryMatchHistory(profileData.accountId);
				setMatchHistory(res);
			}
		}
		async function getChampionAvatar() {
			const URL = 'https://ddragon.leagueoflegends.com/api/versions.json';
			const res = await axios.get(URL);
			const version = res.data[0];
			const NEW_URL = 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/Aatrox.png';
			console.log(NEW_URL);
			const CHAMPS_URL = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US/champion.json';
			const res2 = await axios.get(CHAMPS_URL);
			const allChamps = res2.data.data;
			let myChamp = null;
			for (const champ in allChamps) {
				if (allChamps[champ].key === '110') {
					myChamp = allChamps[champ].id;
				}
			}
			console.log(myChamp);
			const myChampAvatar = 'http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/' + myChamp + '.png';
		}

		//getLeague();
		getChampionsMystery();
		//getMatchHistory();
		getChampionAvatar();
	}, [profileData]);

	return (
		<div>
			<h2>Profile</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder="summoner name" {...register('summonerName', { required: true })} />
				{errors.summonerName?.type === 'required' && 'Please enter your summoner name'}
				<input type="submit" />
			</form>
			<RankedStats />
			<h4>profile infos</h4>
			{profileData && <pre>{JSON.stringify(profileData, null, 2)}</pre>}
			<h4>ranked infos</h4>
			{rankedData && <pre>{JSON.stringify(rankedData, null, 2)}</pre>}
			<h4>champions mystery</h4>
			{championsMystery && <pre>{JSON.stringify(championsMystery, null, 2)}</pre>}
			<h4>match history</h4>
			{matchHistory && <pre>{JSON.stringify(matchHistory, null, 2)}</pre>}
		</div>
	);
};

export default Profile;
