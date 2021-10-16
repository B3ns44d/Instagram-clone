import { childrenProps } from '@shared/interfaces';
import type { FC } from 'react';

const Feed: FC = ({ children }: childrenProps): JSX.Element => (
	<main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
		{children}
	</main>
);

export default Feed;
