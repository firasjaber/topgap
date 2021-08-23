import { ChevronDownIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { querySummoner } from './../../api/riotApi';
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

type Inputs = {
	summonerName: string;
};

const regions = ['EUW', 'NA', 'KR', 'TR', 'CN'];

interface SearchInputProps {
	size?: String;
}

const SearchInput: React.FC<SearchInputProps> = ({ size = 'lg' }) => {
	console.log(size);
	const isSmall = size === 'sm';
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = ({ summonerName }) => {
		querySummoner(summonerName);
	};

	const [selectedRegion, setSelectedRegion] = useState<String>(regions[0]);
	const [regionIsOpen, setRegionIsOpen] = useState<boolean>(false);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="relative flex items-center rounded ">
				<div
					className={`absolute inset-y-0 left-0 flex items-center p-1 text-gray-800 font-semibold cursor-pointer hover:bg-blue-100 rounded-l ${
						isSmall ? 'space-x-0 pl-3' : 'space-x-2 pl-4'
					}`}
					onClick={() => setRegionIsOpen((regionIsOpen) => !regionIsOpen)}
				>
					<div className={selectedRegion !== 'EUW' ? 'mr-2' : ''}>{selectedRegion}</div>
					<ChevronDownIcon className="h-6 w-6 text-gray-600 focus:ring-blue-950" />
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
					show={regionIsOpen}
				>
					<div className="absolute left-0 mt-64 w-40 bg-blue-50 z-20 rounded text-gray-800">
						{regions.map((region, key) => (
							<div
								key={key}
								className="p-2 pl-4 w-full hover:bg-blue-100 cursor-pointer rounded transition-all"
								onClick={() => {
									setSelectedRegion(regions[key]);
									setRegionIsOpen(false);
								}}
							>
								{region}
							</div>
						))}
					</div>
				</Transition>

				<input
					className={`${isSmall ? 'p-1 w-60 pl-20' : 'p-3 w-96 pl-24'} bg-blue-50  rounded `}
					placeholder={isSmall ? 'Username' : 'Search for your username'}
					{...register('summonerName', { required: true })}
				/>
				{errors.summonerName?.type === 'required' && 'Please enter your summoner name'}
				<button
					className={`absolute top-50 right-0 text-gray-500 w-12 rounded-r hover:bg-blue-100 transition-all ${
						isSmall ? 'h-8 p-1 -mr-3' : ' h-12 p-3'
					}`}
					type="submit"
				>
					<SearchIcon className="w-6 h-6" />
				</button>
			</div>
		</form>
	);
};

export default SearchInput;
