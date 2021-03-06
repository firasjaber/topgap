import axios from 'axios';
import { profile } from 'console';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { queryChampionsMystery, queryMatchHistory, querySummoner, querySummonerLeague } from './../../api/riotApi';
//Interfaces
import { IProfileData, ISummonerRankedData } from './../../interfaces';
import ChampionsMastery from './Profile/ChampionsMastery';
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

		getLeague();
		getChampionsMystery();
		//getMatchHistory();
	}, [profileData]);
	useEffect(() => {}, [championsMystery]);

	return (
		<div>
			<h2>Profile</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder="summoner name" {...register('summonerName', { required: true })} />
				{errors.summonerName?.type === 'required' && 'Please enter your summoner name'}
				<input type="submit" />
			</form>
			<RankedStats league={rankedData} />
			<ChampionsMastery champions={championsMystery} />
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
