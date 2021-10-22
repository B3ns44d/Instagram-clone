import { childrenProps } from '@shared/interfaces';
import type { FC, ReactElement } from 'react';
import { useSession } from 'next-auth/client';
import clsx from 'clsx';

const Feed: FC = ({ children }: childrenProps): ReactElement => {
	const [session] = useSession();

	return (
		<main
			className={clsx([
				'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto',
				!session && '!grid-cols-1 !max-w-3xl',
			])}
		>
			{children}
		</main>
	);
};
export default Feed;
