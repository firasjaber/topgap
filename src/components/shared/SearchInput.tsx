import { useForm, SubmitHandler } from 'react-hook-form';
import { RIOT_API_KEY } from './../../config';

type Inputs = {
	summonerName: string;
};

const SearchInput: React.FunctionComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data, RIOT_API_KEY);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input placeholder="summoner name" {...register('summonerName', { required: true })} />
			{errors.summonerName?.type === 'required' && 'Please enter your summoner name'}
			<input type="submit" />
		</form>
	);
};

export default SearchInput;
