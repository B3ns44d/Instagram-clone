/* eslint-disable @next/next/no-img-element */
import UserNameText from '@components/UserNameText';
import type { FC, ReactElement } from 'react';
import { signOut, useSession } from 'next-auth/client';
import { generateUsername } from '@shared/utils';

const MiniProfile: FC = (): ReactElement => {
	const [session] = useSession();
	const { image, name } = session?.user;
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				src={image}
				alt={`${name} profile`}
				className="rounded-full border p-[2px] w-16 h-16"
			/>
			<div className="flex-1 mx-4">
				<UserNameText userName={generateUsername(name)} />
				<h3 className="text-sm text-gray-500">{name}</h3>
			</div>
			<button
				type="submit"
				className="text-blue-400 text-sm font-semibold"
				onClick={() => signOut()}
			>
				Sign out
			</button>
		</div>
	);
};

export default MiniProfile;
