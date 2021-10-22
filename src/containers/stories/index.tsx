/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC, ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { helpers } from 'faker';
import Story from '@components/Story';
import { useSession } from 'next-auth/client';
import { generateUsername } from '@shared/utils';

const Stories: FC = (): ReactElement => {
	const [stories, setStories] = useState<Array<string | number>>([]);
	const [session] = useSession();

	useEffect(() => {
		const data = [...Array(20)].map((_, i) => ({
			...helpers.contextualCard(),
			id: i,
		}));

		setStories(data);
	}, []);

	return (
		<div className="flex bg-white border border-gray-200 rounded-sm space-x-2 p-6 mt-8 overflow-x-scroll scrollbar-hide">
			{session && (
				<Story
					src={session?.user?.image}
					alt={session?.user?.name}
					username={generateUsername(session?.user?.name)}
				/>
			)}
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
