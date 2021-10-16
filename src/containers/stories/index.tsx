/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { helpers } from 'faker';
import Story from '@components/Story';

const Stories: FC = (): JSX.Element => {
	const [stories, setStories] = useState<Array<string | number>>([]);

	useEffect(() => {
		const data = [...Array(20)].map((_, i) => ({
			...helpers.contextualCard(),
			id: i,
		}));

		setStories(data);
	}, []);

	return (
		<div className="flex bg-white border border-gray-200 rounded-sm space-x-2 p-6 mt-8 overflow-x-scroll scrollbar-hide">
			{stories?.map((user: any) => (
				<Story
					key={user.id}
					src={user.avatar}
					alt={user.name}
					username={user.username}
				/>
			))}
		</div>
	);
};

export default Stories;
