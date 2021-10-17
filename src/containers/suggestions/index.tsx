/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC, ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { helpers } from 'faker';

const Suggestions: FC = (): ReactElement => {
	const [suggestions, setSuggestions] = useState<string[]>([]);

	useEffect(() => {
		const suggestionsData = [...Array(5)].map((_, i) => ({
			...helpers.contextualCard(),
			id: i,
		}));

		setSuggestions(suggestionsData);
	}, []);
	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
				<button type="button" className="text-gray-600 font-semibold">
					See all
				</button>
			</div>
			{suggestions?.map((suggestion: any) => (
				<div
					className="flex items-center mt-3 justify-between"
					key={suggestion.id}
				>
					<img
						src={suggestion.avatar}
						alt={`${suggestion.name} profile`}
						className="w-10 h-10 rounded-full border p-[2px]"
					/>
					<div className="flex-1 ml-4">
						<h2 className="text-sm font-semibold">{suggestion.username}</h2>
						<h3 className="text-xs text-gray-400 truncate">
							Followed by {suggestion.name}
						</h3>
					</div>
					<button
						type="button"
						className="text-blue-400 font-bold text-xs ml-20"
					>
						Follow
					</button>
				</div>
			))}
		</div>
	);
};

export default Suggestions;
