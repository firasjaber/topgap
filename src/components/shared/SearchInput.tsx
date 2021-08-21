import { ChevronDownIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { querySummoner } from './../../api/riotApi';

type Inputs = {
	summonerName: string;
};

const regions = ['EUW', 'NA', 'KR', 'TR', 'CN'];

const SearchInput: React.FunctionComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = ({ summonerName }) => {
		querySummoner(summonerName);
	};

	const [selectedRegion, setSelectedRegion] = useState<String>(regions[0]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="relative flex items-center rounded ">
				<div className=" absolute inset-y-0 left-0 flex items-center p-1 pl-4 space-x-2 text-gray-800 font-semibold">
					<div>{selectedRegion}</div>
					<ChevronDownIcon className="h-6 w-6 text-gray-600 focus:ring-blue-950" />
				</div>
				<input
					className="p-3 w-96 bg-blue-50 pl-24 rounded"
					placeholder="Search for your username"
					{...register('summonerName', { required: true })}
				/>
				{errors.summonerName?.type === 'required' && 'Please enter your summoner name'}
				<button
					className="absolute top-50 right-0 text-gray-500 h-12 w-12 p-3 rounded-r hover:bg-blue-100 transition-all"
					type="submit"
				>
					<SearchIcon className="w-6 h-6" />
				</button>
			</div>
		</form>
	);
};

export default SearchInput;
