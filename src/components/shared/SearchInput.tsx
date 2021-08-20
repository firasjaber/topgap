import { useForm, SubmitHandler } from 'react-hook-form';
import { RIOT_API_KEY } from './../../config';
import { querySummoner } from './../../api/riotApi';

type Inputs = {
	summonerName: string;
};

const SearchInput: React.FunctionComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = ({ summonerName }) => {
		querySummoner(summonerName);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<select>
				<option>EUW</option>
				<option>NA</option>
				<option>KR</option>
				<option>CH</option>
				<option>TR</option>
			</select>
			<input placeholder="summoner name" {...register('summonerName', { required: true })} />
			{errors.summonerName?.type === 'required' && 'Please enter your summoner name'}
			<input type="submit" />
		</form>
	);
};

export default SearchInput;
